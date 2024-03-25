import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

function Form3({ form, setForm, error, setError }) {
  return (
    <View style={styles.containerForm1}>
      <View style={styles.contentFormIcon1}>
        <View style={styles.subContentFormIcon1}>
          <View style={styles.subContentFormBox1}></View>
          <View style={styles.iconForm1}>
            <MaterialCommunityIcons name="car-outline" size={35} color="#3567FC" />
            <MaterialCommunityIcons name="shield-check" size={22} color="#3567FC" style={{position: "absolute", top: 3, left: 35}} />
          </View>
          <View style={styles.contentTextIconForm1}>
            <Text style={styles.textForm1}>Foto SIM & STNK</Text>
          </View>
        </View>
        <View style={styles.subContentFormIcon2}>
          <View style={styles.subContentFormBox2}></View>
          <View style={styles.iconForm2}>
            <MaterialCommunityIcons name="car-outline" size={35} color="green" />
            <MaterialCommunityIcons name="shield-check" size={22} color="green" style={{position: "absolute", top: 3, left: 35}} />
          </View>
        </View>
      </View>

      <View style={styles.contentInformationRegistrasiKlaim}>
        <View style={styles.subContentInformationRegistrasiKlaim}>
          <Text style={styles.informationRegistrasiKlaimKey}>No. Polisi</Text>
          <Text style={styles.informationRegistrasiKlaimValue}>B 1234 EFG</Text>
        </View>
        <View style={styles.subContentInformationRegistrasiKlaim}>
          <Text style={styles.informationRegistrasiKlaimKey}>
            Nama tertanggung
          </Text>
          <Text style={styles.informationRegistrasiKlaimValue}>
            Fajar Prihadi
          </Text>
        </View>
        <View style={styles.subContentInformationRegistrasiKlaim}>
          <Text style={styles.informationRegistrasiKlaimKey}>No. Polis</Text>
          <Text style={styles.informationRegistrasiKlaimValue}>VCL2007001</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerForm1: {
    flex: 1,
  },
  contentFormIcon1: {
    height: 50,
    marginBottom: 25,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subContentFormIcon1: {
    width: "58%",
    display: "flex",
    flexDirection: "row",
    borderRadius: 7,
    overflow: "hidden",
    borderColor: "grey",
    borderWidth: 1,
  },
  subContentFormBox1: {
    width: "5%",
    height: "100%",
    backgroundColor: "blue",
  },
  iconForm1: {
    width: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F7FF",
  },
  contentTextIconForm1: {
    width: "65%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 5,
  },
  textForm1: {
    fontSize: 11,
    color: "#B3B3B3",
  },
  subContentFormIcon2: {
    width: "40%",
    display: "flex",
    flexDirection: "row",
    borderRadius: 7,
    overflow: "hidden",
    borderColor: "grey",
    borderWidth: 1,
  },
  subContentFormBox2: {
    width: "5%",
    height: "100%",
    backgroundColor: "green",
  },
  iconForm2: {
    width: "50%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F7FF",
  },
  contentTextRegistrasiKlaim: {
    width: "100%",
    marginBottom: 30,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: "#F2F7FF",
  },
  textRegistrasiKlaim: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 14,
    fontWeight: "700",
    color: "#3567FC",
  },
  contentInformationRegistrasiKlaim: {
    marginBottom: 40,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderColor: "#A8A8A8",
    borderWidth: 1,
  },
  subContentInformationRegistrasiKlaim: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    padding: 10,
  },
  informationRegistrasiKlaimKey: {
    width: "50%",
    textAlign: "left",
    fontSize: 12,
    fontWeight: "700",
    color: "#3567FC",
  },
  informationRegistrasiKlaimValue: {
    width: "50%",
    textAlign: "left",
    fontSize: 12,
    color: "#A8A8A8",
  },
});

export default Form3;
