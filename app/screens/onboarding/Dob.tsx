import {
  View,
  Text,
  Platform,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { useState } from "react";
import colors from "../../../assets/colors";
import AppTextInput from "../../components/AppTextInput";
import AppButton from "../../components/AppButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { OnboardingParamList } from "../../navigation/OnboardingNavigation";

const { width } = Dimensions.get("window");

type DobProps = NativeStackNavigationProp<OnboardingParamList, "Dob">;

const Dob = ({ navigation }: { navigation: DobProps }) => {
  const [date, setDate] = useState(new Date(2000, 0, 1));
  const [tempDate, setTempDate] = useState(new Date(2000, 0, 1));
  const [show, setShow] = useState(false);
  const [dob, setDob] = useState<string>("");

  const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const onChange = (_: any, selectedDate?: Date) => {
    if (selectedDate) {
      setTempDate(selectedDate);
    }
  };

  const confirmDate = () => {
    setDate(tempDate);
    setDob(formatDate(tempDate));
    setShow(false);
  };

  const cancelPicker = () => {
    setTempDate(date);
    setShow(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>What's your date of birth?</Text>
      <TouchableOpacity onPress={() => setShow(true)}>
        <AppTextInput
          placeholder="MM/DD/YYYY"
          value={dob}
          onChangeText={() => {}}
          style={styles.input}
          onFocus={() => setShow(true)}
          keyboardType="default"
          editable={false}
        />
      </TouchableOpacity>
      <Modal
        visible={show}
        transparent
        animationType="slide"
        onRequestClose={cancelPicker}
      >
        <View style={styles.modalContainer}>
          <View style={styles.pickerContainer}>
            <DateTimePicker
              value={tempDate}
              mode="date"
              display={Platform.OS === "ios" ? "spinner" : "default"}
              onChange={onChange}
              maximumDate={new Date()}
              minimumDate={new Date(1900, 0, 1)}
            />
            <View style={styles.buttonContainer}>
              <Button title="Cancel" onPress={cancelPicker} />
              <Button title="Confirm" onPress={confirmDate} />
            </View>
          </View>
        </View>
      </Modal>

      <AppButton
        onPress={() => {
          navigation.navigate("Name");
        }}
        style={{ width: width - 40, marginTop: 20 }}
      >
        <Text style={styles.btnText}>Next</Text>
      </AppButton>
    </View>
  );
};

const styles = StyleSheet.create({
  btnText: {
    color: colors.white,
    fontFamily: "Manrope-SemiBold",
    fontSize: 16,
    textTransform: "capitalize",
  },
  container: {
    backgroundColor: colors.AppBg,
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 50,
    alignItems: "center",
  },
  heading: {
    color: colors.dark,
    fontFamily: "Manrope-SemiBold",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: width - 40,
    height: 50,
    borderRadius: 10,
    backgroundColor: colors.white,
    marginTop: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: colors.grey,
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  pickerContainer: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});

export default Dob;
