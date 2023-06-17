import React, {useState, FC} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Data 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'data 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Data 6', value: '6'},
  {label: 'list 7', value: '7'},
  {label: 'Item 8', value: '8'},
  {label: 'List 9', value: '9'},
];

const CommonDropDown: FC = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: 'blue'}]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  const filteredData = data.filter(item =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const renderInputSearch = () => {
    return (
      <TextInput
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search..."
        style={{borderWidth: 0.5, margin: 4, color: 'black'}}
        placeholderTextColor={'black'}
        // onBlur={() => setSearchQuery('')}
      />
    );
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        itemTextStyle={{color: 'red'}}
        itemContainerStyle={{backgroundColor: 'pink'}}
        activeColor="blue"
        data={filteredData}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => {
          setIsFocus(false);
          setSearchQuery('');
        }}
        renderInputSearch={renderInputSearch}
        onChange={(item: any) => {
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <MaterialIcons name={'home'} size={26} color={'red'} />
        )}
      />
    </View>
  );
};

export default CommonDropDown;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color: 'black',
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'black',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'black',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: 'black',
  },
});

// ================***********==========================
// ================***********==========================
// ================***********==========================
// ================***********==========================
// ================***********==========================

// import React, {useState} from 'react';
// import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
// import {MultiSelect} from 'react-native-element-dropdown';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// const data = [
//   {label: 'Item 1', value: '1'},
//   {label: 'Item 2', value: '2'},
//   {label: 'Item 3', value: '3'},
//   {label: 'Item 4', value: '4'},
//   {label: 'Item 5', value: '5'},
//   {label: 'Item 6', value: '6'},
//   {label: 'Item 7', value: '7'},
//   {label: 'Item 8', value: '8'},
// ];

// const CommonDropDown = () => {
//   const [selected, setSelected] = useState([]);

//   return (
//     <View style={styles.container}>
//       <MultiSelect
//         style={styles.dropdown}
//         placeholderStyle={styles.placeholderStyle}
//         selectedTextStyle={styles.selectedTextStyle}
//         inputSearchStyle={styles.inputSearchStyle}
//         itemTextStyle={{color: 'black'}}
//         itemContainerStyle={{backgroundColor: 'pink'}}
//         iconStyle={styles.iconStyle}
//         search
//         data={data}
//         labelField="label"
//         valueField="value"
//         placeholder="Select item"
//         searchPlaceholder="Search..."
//         value={selected}
//         onChange={(item: any) => {
//           setSelected(item);
//         }}
//         renderLeftIcon={() => (
//           <MaterialIcons name={'home'} size={26} color={'red'} />
//         )}
//         selectedStyle={styles.selectedStyle}
//       />
//     </View>
//   );
// };

// export default CommonDropDown;

// const styles = StyleSheet.create({
//   container: {padding: 16},
//   dropdown: {
//     height: 50,
//     backgroundColor: 'transparent',
//     borderBottomColor: 'gray',
//     borderBottomWidth: 0.5,
//   },
//   placeholderStyle: {
//     fontSize: 16,
//     color: 'black',
//   },
//   selectedTextStyle: {
//     fontSize: 14,
//   },
//   iconStyle: {
//     width: 20,
//     height: 20,
//   },
//   inputSearchStyle: {
//     height: 40,
//     fontSize: 16,
//     color: 'black',
//   },
//   icon: {
//     marginRight: 5,
//   },
//   selectedStyle: {
//     borderRadius: 12,
//   },
// });

// ================***********==========================
// ================***********==========================
// ================***********==========================
// ================***********==========================
// ================***********==========================

// import React, {useState} from 'react';
// import {View} from 'react-native';
// import MultiSelect from 'react-native-multiple-select';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// const items = [
//   {
//     id: '92iijs7yta',
//     name: 'Ondo',
//   },
//   {
//     id: 'a0s0a8ssbsd',
//     name: 'Ogun',
//   },
//   {
//     id: '16hbajsabsd',
//     name: 'Calabar',
//   },
//   {
//     id: 'nahs75a5sg',
//     name: 'Lagos',
//   },
//   {
//     id: '667atsas',
//     name: 'Maiduguri',
//   },
//   {
//     id: 'hsyasajs',
//     name: 'Anambra',
//   },
//   {
//     id: 'djsjudksjd',
//     name: 'Benue',
//   },
//   {
//     id: 'sdhyaysdj',
//     name: 'Kaduna',
//   },
//   {
//     id: 'suudydjsjd',
//     name: 'Abuja',
//   },
// ];

// const Component = () => {
//   const [selectedItems, setselectedItems] = useState([]);

//   const onSelectedItemsChange = selectedItems => {
//     setselectedItems(selectedItems);
//   };
//   console.log({ selectedItems });

//    const renderIcon = isSelected => {
//      if (isSelected) {
//        return <MaterialIcons name="eye" size={20} color="#000" />;
//      } else {
//        return <MaterialIcons name="eye-off" size={20} color="#000" />;
//      }
//   };

//   const renderSearchIcon = () => {
//     return <MaterialIcons name="home" size={16} color="red" />;
//   };

//   return (
//     <View style={{flex: 1}}>
//       <MultiSelect
//         hideTags
//         items={items}
//         uniqueKey="id"
//         // ref={component => {
//         //   this.multiSelect = component;
//         // }}
//         hideSubmitButton
//         onSelectedItemsChange={onSelectedItemsChange}
//         selectedItems={selectedItems}
//         selectText="Pick Items"
//         searchInputPlaceholderText="Search Items..."
//         onChangeInput={text => console.log(text)}
//         altFontFamily="ProximaNova-Light"
//         tagRemoveIconColor="#CCC"
//         tagBorderColor="#CCC"
//         tagTextColor="#CCC"
//         selectedItemTextColor="#CCC"
//         selectedItemIconColor="#CCC"
//         itemTextColor="#000"
//         displayKey="name"
//         searchInputStyle={{color: '#CCC'}}
//         submitButtonColor="#CCC"
//         submitButtonText="Submit"
//         iconSearch={renderSearchIcon}
//       />
//       {/* <View>{this.multiSelect.getSelectedItemsExt(selectedItems)}</View> */}
//     </View>
//   );
// };
// export default Component;

// ================***********==========================
// ================***********==========================
// ================***********==========================
// ================***********==========================
// ================***********==========================

// import React from 'react';
// import {MultipleSelectList} from 'react-native-dropdown-select-list';

// const Component = () => {
//   const [selected, setSelected] = React.useState([]);

//   const data = [
//     {key: '1', value: 'Mobiles', disabled: true},
//     {key: '2', value: 'Appliances'},
//     {key: '3', value: 'Cameras'},
//     {key: '4', value: 'Computers', disabled: true},
//     {key: '5', value: 'Vegetables'},
//     {key: '6', value: 'Diary Products'},
//     {key: '7', value: 'Drinks'},
//   ];

//   return (
//     <MultipleSelectList
//       setSelected={val => setSelected(val)}
//       data={data}
//       save="value"
//       onSelect={() => alert(selected)}
//       inputStyles={{color: 'black'}}
//       boxStyles={{color: 'black'}}
//       dropdownItemStyles={{color: 'black'}}
//       dropdownTextStyles={{ color: 'black' }}
//       labelStyles={{color: 'black'}}
//       placeholder="search"
//       badgeStyles={{color: 'black'}}
//       // label="Categories"
//     />
//   );
// };

// export default Component;
