import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Pressable,
} from "react-native";

import Form1 from "../components/form1";
import Form2 from "../components/form2";
import Form3 from "../components/form3";

const Form = ({ navigation }) => {
  const [screen, setScreen] = useState(0);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    biodata: "",
    provinsi: "",
    kota: "",
    kecamatan: "",
    desa: "",
    fotoSelfie: {},
    fotoKtp: {},
    fotoSim: {},
    fotoStnk: {},
    fotoKerusakan: [],
    deskripsiKerusakan: [],
  });
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    biodata: "",
    provinsi: "",
    kota: "",
    kecamatan: "",
    desa: "",
    fotoSelfie: "",
    fotoKtp: "",
    fotoSim: "",
    fotoStnk: "",
    fotoKerusakan: "",
    deskripsiKerusakan: "",
  });

  const screenDisplay = () => {
    if (screen === 0) {
      return (
        <Form3
          form={form}
          setForm={setForm}
          error={error}
          setError={setError}
        />
      );
    } else if (screen === 1) {
      return (
        <Form2
          form={form}
          setForm={setForm}
          error={error}
          setError={setError}
        />
      );
    } else if (screen === 2) {
      return (
        <Form3
          form={form}
          setForm={setForm}
          error={error}
          setError={setError}
        />
      );
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...error };
    if (screen === 0) {
      if (form.firstName.trim() === "") {
        newErrors.firstName = "Nama depan wajib di isi";
        isValid = false;
      } else {
        newErrors.firstName = "";
      }

      if (form.lastName.trim() === "") {
        newErrors.lastName = "Nama belakang wajib di isi";
        isValid = false;
      } else {
        newErrors.lastName = "";
      }

      if (form.biodata.trim() === "") {
        newErrors.biodata = "Biodata wajib di isi";
        isValid = false;
      } else {
        newErrors.biodata = "";
      }

      if (form.provinsi.trim() === "") {
        newErrors.provinsi = "Provinsi wajib di isi";
        isValid = false;
      } else {
        newErrors.provinsi = "";
      }

      if (form.kota.trim() === "") {
        newErrors.kota = "Kota wajib di isi";
        isValid = false;
      } else {
        newErrors.kota = "";
      }

      if (form.kecamatan.trim() === "") {
        newErrors.kecamatan = "Kecamatan wajib di isi";
        isValid = false;
      } else {
        newErrors.kecamatan = "";
      }

      if (form.desa.trim() === "") {
        newErrors.desa = "Desa wajib di isi";
        isValid = false;
      } else {
        newErrors.desa = "";
      }
    } else if (screen === 1) {
      if (Object.keys(form.fotoSelfie).length === 0) {
        newErrors.fotoSelfie = "Foto selfie wajib di isi";
        isValid = false;
      } else {
        newErrors.fotoSelfie = "";
      }

      if (Object.keys(form.fotoKtp).length === 0) {
        newErrors.fotoKtp = "Foto KTP wajib di isi";
        isValid = false;
      } else {
        newErrors.fotoKtp = "";
      }

      if (Object.keys(form.fotoSim).length === 0) {
        newErrors.fotoSim = "Foto SIM wajib di isi";
        isValid = false;
      } else {
        newErrors.fotoSim = "";
      }

      if (Object.keys(form.fotoStnk).length === 0) {
        newErrors.fotoStnk = "Foto STNK wajib di isi";
        isValid = false;
      } else {
        newErrors.fotoStnk = "";
      }
    } else if(screen === 2) {
      if (form.fotoKerusakan.length === 0) {
        newErrors.fotoKerusakan = "Foto kerusakan wajib di isi";
        isValid = false;
      } else {
        newErrors.fotoKerusakan = "";
      }

      if (form.deskripsiKerusakan.length === 0) {
        newErrors.deskripsiKerusakan = "Deskripsi kerusakan wajib di isi";
        isValid = false;
      } else {
        newErrors.deskripsiKerusakan = "";
      }
    }

    setError(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateForm()) {
      setScreen((currScreen) => currScreen + 1);
    }
  };

  return (
    <SafeAreaView style={styles.containerForm}>
      <ScrollView style={styles.contentForm}>
        <View style={styles.contentNavigationForm}>
          <Pressable
            disabled={screen === 0}
            onPress={() => {
              setScreen((currScreen) => currScreen - 1);
            }}
          >
            <AntDesign name="left" size={26} color="#3567FC" />
          </Pressable>
          <Pressable disabled={screen === 2} onPress={handleNext}>
            <AntDesign name="right" size={26} color="#3567FC" />
          </Pressable>
        </View>
        <View style={styles.containerInput}>
          {screenDisplay()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerForm: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  contentForm: {
    flex: 1,
  },
  contentNavigationForm: {
    width: "100%",
    marginBottom: 10,
    top: 5,
    padding: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 10,
  },
  containerInput: {
    width: "85%",
    alignSelf: "center",
  },
});

export default Form;
