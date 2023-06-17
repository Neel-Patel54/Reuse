import React, {useEffect, useState, useMemo, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {BleManager as BleHandle} from 'react-native-ble-plx';
import BleManager from 'react-native-ble-manager';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import CommonButton from '../components/CommonButton';

const BluetoothScreen = ({navigation}: any) => {
  const [devices, setDevices] = useState<any>([]);
  useEffect(() => {
    const bleManager = new BleHandle();
    const checkBluetoothPermission = async () => {
      // const bluetoothPermission = await request(
      //   PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL,
      // );
      BleManager.enableBluetooth()
        .then(() => {
          console.log('Bluetooth is turned on!');
          checkLocationPermission();
        })
        .catch(() => {
          Alert.alert(
            'Bluetooth Permission',
            'Please enable Bluetooth to continue.',
            [
              {
                text: 'OK',
                onPress: checkBluetoothPermission,
              },
            ],
            {cancelable: false},
          );
        });
    };

    const checkLocationPermission = async () => {
      const locationPermission = await request(
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );

      if (locationPermission === RESULTS.GRANTED) {
        console.log('Location permission granted');
        scanAndRetrieveDevices();
      } else if (locationPermission === RESULTS.DENIED) {
        Alert.alert(
          'Location Permission',
          'Please grant location permission to continue.',
          [
            {
              text: 'OK',
              onPress: checkLocationPermission,
            },
          ],
          {cancelable: false},
        );
      } else {
        console.log('Location permission denied');
      }
    };

    const scanAndRetrieveDevices = async () => {
      try {
        await bleManager.startDeviceScan(null, null, (error, device) => {
          if (error) {
            console.error('Bluetooth scan error:', error);
            return;
          }

          if (device) {
            setDevices((prevDevices: any) => {
              const existingDevice: any = prevDevices.find(
                (prevDevice: any) => prevDevice.id === device.id,
              );
              if (!existingDevice) {
                return [...prevDevices, device];
              }
              const updatedDevices = prevDevices.map((prevDevice: any) =>
                prevDevice.id === device.id ? device : prevDevice,
              );
              return updatedDevices;
            });
          }
        });
      } catch (error) {
        console.error('Error scanning Bluetooth devices:', error);
      }
    };
    checkBluetoothPermission();
    // scanAndRetrieveDevices();

    return () => {
      bleManager.stopDeviceScan();
      bleManager.disable();
    };
  }, []);

  const memoizedDevices = useMemo(() => devices, [devices]);

  const renderDeviceItem = useCallback(({item}: any) => {
    return (
      item.name && (
        <TouchableOpacity
          style={styles.txtContainer}
          onPress={() => console.log(item.name)}>
          <Text style={styles.deviceName}>{item.name}</Text>
        </TouchableOpacity>
      )
    );
  }, []);

  return (
    <View style={styles.container}>
      <CommonButton
        title={'Go To TableScreen'}
        disabled={false}
        onPress={() => navigation.navigate('TableScreen')}
      />
      <Text style={styles.heading}>Discovered Devices:</Text>
      <FlatList
        data={memoizedDevices}
        keyExtractor={(item, index) => item.id + index}
        renderItem={renderDeviceItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
  },
  txtContainer: {
    width: '100%',
    height: 48,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  deviceName: {
    fontSize: 16,
    color: 'black',
  },
});

export default BluetoothScreen;

// **********************################*******************************

// import React, {useEffect, useState} from 'react';
// import {StyleSheet, Text, View, Button, FlatList} from 'react-native';
// import BleManager from 'react-native-ble-manager';
// import {PERMISSIONS, request} from 'react-native-permissions';

// BleManager.start({showAlert: false});

// const BluetoothScreen = () => {
//   const [scanning, setScanning] = useState<any>(false);
//   const [devices, setDevices] = useState<any>([]);
//   const [connectedDevice, setConnectedDevice] = useState<any>(null);

//   useEffect(() => {
//     BleManager.enableBluetooth()
//       .then(() => {
//         console.log('Bluetooth is enabled');
//         request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
//       })
//       .catch(error => {
//         console.error('Failed to enable Bluetooth:', error);
//       });
//   }, []);

//   const startScanDevices = () => {
//     if (!scanning) {
//       setScanning(true);
//       setDevices([]);
//       BleManager.scan([], 5, true)
//         .then((list: any) => {
//           console.log('Scanning started', list);
//         })
//         .catch(error => {
//           console.error('Failed to start scanning:', error);
//         });
//     }
//   };

//   const stopScanDevices = () => {
//     if (scanning) {
//       setScanning(false);
//       BleManager.stopScan()
//         .then(() => {
//           console.log('Scanning stopped');
//         })
//         .catch(error => {
//           console.error('Failed to stop scanning:', error);
//         });
//     }
//   };

//   const handleScan = (error, device) => {
//     if (error) {
//       console.error('Failed to scan device:', error);
//       return;
//     }
//     if (!devices.some(d => d.id === device.id)) {
//       setDevices((prevDevices: any) => [...prevDevices, device]);
//     }
//   };

//   const connectToDevice = (device: any) => {
//     BleManager.connect(device.id)
//       .then(() => {
//         console.log('Connected to device:', device);
//         setConnectedDevice(device);
//       })
//       .catch(error => {
//         console.error('Failed to connect to device:', device, error);
//       });
//   };

//   const disconnectFromDevice = () => {
//     if (connectedDevice) {
//       BleManager.disconnect(connectedDevice.id)
//         .then(() => {
//           console.log('Disconnected from device:', connectedDevice);
//           setConnectedDevice(null);
//         })
//         .catch(error => {
//           console.error(
//             'Failed to disconnect from device:',
//             connectedDevice,
//             error,
//           );
//         });
//     }
//   };

//   const sendDataToDevice = () => {
//     if (connectedDevice) {
//       const data: any = 'Hello, device!';
//       BleManager.write(
//         connectedDevice.id,
//         'SERVICE_UUID',
//         'CHARACTERISTIC_UUID',
//         data,
//       )
//         .then(() => {
//           console.log('Sent data to device:', data);
//         })
//         .catch(error => {
//           console.error('Failed to send data to device:', data, error);
//         });
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Button
//         title="Scan Devices"
//         onPress={startScanDevices}
//         disabled={scanning}
//       />
//       <Button
//         title="Stop Scan"
//         onPress={stopScanDevices}
//         disabled={!scanning}
//       />
//       <FlatList
//         data={devices}
//         keyExtractor={item => item.id}
//         renderItem={({item}) => (
//           <View style={styles.deviceItem}>
//             <Text style={{color: 'black'}}>{item.name}</Text>
//             <Text style={{color: 'black'}}>{item.id}</Text>
//             <Button
//               title="Connect"
//               onPress={() => connectToDevice(item)}
//               disabled={connectedDevice !== null}
//             />
//           </View>
//         )}
//       />
//       {connectedDevice && (
//         <View style={styles.connectedDeviceContainer}>
//           <Text>Connected Device:</Text>
//           <Text>{connectedDevice.name}</Text>
//           <Text>{connectedDevice.id}</Text>
//           <Button title="Disconnect" onPress={disconnectFromDevice} />
//           <Button title="Send Data" onPress={sendDataToDevice} />
//         </View>
//       )}
//     </View>
//   );
// };

// export default BluetoothScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   deviceItem: {
//     marginVertical: 10,
//   },
//   connectedDeviceContainer: {
//     marginTop: 20,
//   },
// });

// ++++++++++++++++==================+++++++++++++++++******************

// import React, {useEffect, useState} from 'react';
// import {StyleSheet, Text, View, Button, FlatList} from 'react-native';
// import {BleManager} from 'react-native-ble-plx';
// import {PERMISSIONS, request} from 'react-native-permissions';

// const BluetoothScreen = () => {
//   const [devices, setDevices] = useState([]);

//   useEffect(() => {
//     handlePermistions();
//     const bleManager = new BleManager();

//     const scanAndRetrieveDevices = async () => {
//       try {
//         await bleManager.startDeviceScan(null, null, (error, device) => {
//           if (error) {
//             console.error('Bluetooth scan error:', error);
//             return;
//           }

//           if (device) {
//             setDevices(prevDevices => {
//               // Check if device with the same ID already exists in the list
//               const existingDevice = prevDevices.find(
//                 prevDevice => prevDevice.id === device.id,
//               );

//               if (!existingDevice) {
//                 // Add the new device to the list
//                 return [...prevDevices, device];
//               }

//               // Update the existing device with the latest information
//               const updatedDevices = prevDevices.map(prevDevice =>
//                 prevDevice.id === device.id ? device : prevDevice,
//               );

//               return updatedDevices;
//             });
//           }
//         });
//       } catch (error) {
//         console.error('Error scanning Bluetooth devices:', error);
//       }
//     };

//     scanAndRetrieveDevices();

//     return () => {
//       bleManager.stopDeviceScan();
//     };
//   }, []);

//   const handlePermistions = async () => {
//     await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
//   };

//   console.log({devices});

//   return (
//     <View style={{flex: 1}}>
//       <FlatList
//         data={devices}
//         keyExtractor={(item, index) => item.id + index}
//         renderItem={({item}) => (
//           <View>
//             {item.name && <Text style={{color: 'black'}}>{item.name}</Text>}
//             {/* <Text style={{color: 'black'}}>
//               {item.name ? item.name : 'Unknown'}
//             </Text>
//             <Text style={{color: 'black'}}>{item.id}</Text>
//             <Text style={{color: 'black'}}>{item.rssi}</Text> */}
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// export default BluetoothScreen;

// ==============================================================================================

// import React, {useEffect, useState, useRef} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   PermissionsAndroid,
//   Alert,
//   TouchableOpacity,
//   NativeEventEmitter,
// } from 'react-native';
// import {BleManager as BleHandle, Device} from 'react-native-ble-plx';
// import BleManager from 'react-native-ble-manager';
// import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';

// const BluetoothScreen = () => {
//   const [devices, setDevices] = useState<any>([]);
//   const bleManagerRef = useRef<any>(null);
//   const bleManagerEmitterRef = useRef<any>(null);

//   useEffect(() => {
//     // const bleManager = new BleHandle();
//     const checkBluetoothPermission = async () => {
//       // const bluetoothPermission = await request(
//       //   PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL,
//       // );
//       BleManager.enableBluetooth()
//         .then(() => {
//           console.log('Bluetooth is turned on!');
//           checkLocationPermission();
//         })
//         .catch(() => {
//           Alert.alert(
//             'Bluetooth Permission',
//             'Please enable Bluetooth to continue.',
//             [
//               {
//                 text: 'OK',
//                 onPress: checkBluetoothPermission, // Recursive call to checkBluetoothPermission
//               },
//             ],
//             {cancelable: false},
//           );
//         });

//       // if (bluetoothPermission === RESULTS.GRANTED) {
//       //   console.log('Bluetooth permission granted');
//       //   checkLocationPermission();
//       // } else if (bluetoothPermission === RESULTS.DENIED) {
//       //   // Ask the user to enable Bluetooth
//       //   Alert.alert(
//       //     'Bluetooth Permission',
//       //     'Please enable Bluetooth to continue.',
//       //     [
//       //       {
//       //         text: 'OK',
//       //         onPress: checkBluetoothPermission, // Recursive call to checkBluetoothPermission
//       //       },
//       //     ],
//       //     {cancelable: false},
//       //   );
//       // } else {
//       //   console.log('Bluetooth permission denied');
//       //   // Handle denied permission scenario
//       // }
//     };

//     const checkLocationPermission = async () => {
//       const locationPermission = await request(
//         PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
//       );

//       if (locationPermission === RESULTS.GRANTED) {
//         console.log('Location permission granted');
//         scanAndRetrieveDevices();
//       } else if (locationPermission === RESULTS.DENIED) {
//         // Ask the user to grant location permission
//         Alert.alert(
//           'Location Permission',
//           'Please grant location permission to continue.',
//           [
//             {
//               text: 'OK',
//               onPress: checkLocationPermission, // Recursive call to checkLocationPermission
//             },
//           ],
//           {cancelable: false},
//         );
//       } else {
//         console.log('Location permission denied');
//         // Handle denied permission scenario
//       }
//     };

//     const scanAndRetrieveDevices = async () => {
//       bleManagerRef.current = new BleHandle();
//       bleManagerEmitterRef.current = new NativeEventEmitter(BleManager);

//       try {
//         await bleManagerRef.current.startDeviceScan(
//           null,
//           null,
//           (error, device) => {
//             if (error) {
//               console.error('Bluetooth scan error:', error);
//               return;
//             }

//             if (device) {
//               setDevices(prevDevices => {
//                 const existingDevice = prevDevices.find(
//                   prevDevice => prevDevice.id === device.id,
//                 );

//                 if (!existingDevice) {
//                   return [...prevDevices, device];
//                 }

//                 const updatedDevices = prevDevices.map(prevDevice =>
//                   prevDevice.id === device.id ? device : prevDevice,
//                 );

//                 return updatedDevices;
//               });
//             }
//           },
//         );

//         bleManagerEmitterRef.current.addListener('BleManagerStopScan', () => {
//           console.log('Scan stopped');
//         });
//       } catch (error) {
//         console.error('Error scanning Bluetooth devices:', error);
//       }
//     };

//     checkBluetoothPermission();
//     scanAndRetrieveDevices();

//     return () => {
//       if (bleManagerRef.current) {
//         bleManagerRef.current.stopDeviceScan();
//         bleManagerRef.current.destroy();
//       }

//       if (bleManagerEmitterRef.current) {
//         bleManagerEmitterRef.current.removeAllListeners();
//       }
//     };
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Discovered Devices:</Text>
//       <FlatList
//         data={devices}
//         keyExtractor={(item, index) => item.id + index}
//         renderItem={({item}) => {
//           return (
//             item.name && (
//               <TouchableOpacity
//                 style={{
//                   width: '100%',
//                   height: 48,
//                   backgroundColor: 'tomato',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   marginTop: 5,
//                 }}>
//                 <Text style={styles.deviceName}>{item.name}</Text>
//                 {/* <Text style={styles.deviceId}>{item.localName}</Text>
//             <Text style={styles.deviceId}>{item.id}</Text> */}
//               </TouchableOpacity>
//             )
//           );
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 16,
//     paddingVertical: 24,
//   },
//   heading: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     color: 'black',
//   },
//   deviceContainer: {
//     marginBottom: 8,
//   },
//   deviceName: {
//     fontSize: 16,
//     color: 'black',
//   },
//   deviceId: {
//     fontSize: 14,
//     color: 'black',
//   },
// });

// export default BluetoothScreen;
