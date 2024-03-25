import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import ModalPhoto from "./modalPhoto";

function Form2({ form, setForm, error, setError }) {
  const [modalFotoSelfie, setModalFotoSelfie] = useState(false);
  const [modalFotoKtp, setModalFotoKtp] = useState(false);
  const [modalFotoSim, setModalFotoSim] = useState(false);
  const [modalFotoStnk, setModalFotoStnk] = useState(false);

  return (
    <View style={styles.containerForm}>
      <View style={styles.contentFormIcon}>
        <View style={styles.subContentFormIcon1}>
          <View style={styles.subContentFormBox1}></View>
          <View style={styles.iconForm1}>
            <AntDesign name="idcard" size={35} color="#3567FC" />
          </View>
          <View style={styles.contentTextIconForm1}>
            <Text style={styles.textForm1}>Foto SIM & STNK</Text>
          </View>
        </View>
        <View style={styles.subContentFormIcon2}>
          <View style={styles.subContentFormBox2}></View>
          <View style={styles.iconForm2}>
            <MaterialCommunityIcons
              name="car-outline"
              size={35}
              color="green"
            />
            <MaterialCommunityIcons
              name="shield-check"
              size={22}
              color="green"
              style={{ position: "absolute", top: 3, left: 35 }}
            />
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

      <View style={styles.contentInput}>
        <View style={styles.subContentInput}>
          <Text style={styles.labelInput}>Foto Selfie</Text>
          <View style={styles.contentFoto}>
            <TouchableOpacity onPress={() => setModalFotoSelfie(true)}>
              <AntDesign name="pluscircleo" size={35} color="#3567FC" />
            </TouchableOpacity>
            <Text style={styles.textFoto}>Upload Foto Selfie</Text>
            <View style={styles.contentTrash}>
              <FontAwesome name="trash-o" size={24} color="#FFFFFF" />
            </View>
          </View>
          <Text style={styles.textFoto2}>
            * Data pada foto selfie harus terlihat jelas
          </Text>
          {error.fotoSelfie && (
            <Text style={styles.errorForm}>{error.fotoSelfie}</Text>
          )}
        </View>

        <View style={styles.subContentInput}>
          <Text style={styles.labelInput}>Foto KTP</Text>
          <View style={styles.contentFoto}>
            <TouchableOpacity onPress={() => setModalFotoKtp(true)}>
              <AntDesign name="pluscircleo" size={35} color="#3567FC" />
            </TouchableOpacity>
            <Text style={styles.textFoto}>Upload Foto KTP</Text>
            <View style={styles.contentTrash}>
              <FontAwesome name="trash-o" size={24} color="#FFFFFF" />
            </View>
          </View>
          <Text style={styles.textFoto2}>
            * Data pada foto KTP harus terlihat jelas
          </Text>
          {error.fotoKtp && (
            <Text style={styles.errorForm}>{error.fotoKtp}</Text>
          )}
        </View>

        <View style={styles.subContentInput}>
          <Text style={styles.labelInput}>Foto SIM</Text>
          <View style={styles.contentFoto}>
            <TouchableOpacity onPress={() => setModalFotoSim(true)}>
              <AntDesign name="pluscircleo" size={35} color="#3567FC" />
            </TouchableOpacity>
            <Text style={styles.textFoto}>Upload Foto SIM</Text>
            <View style={styles.contentTrash}>
              <FontAwesome name="trash-o" size={24} color="#FFFFFF" />
            </View>
          </View>
          <Text style={styles.textFoto2}>
            * Data pada foto SIM harus terlihat jelas
          </Text>
          {error.fotoSim && (
            <Text style={styles.errorForm}>{error.fotoSim}</Text>
          )}
        </View>

        <View style={styles.subContentInput}>
          <Text style={styles.labelInput}>Foto STNK</Text>
          <View style={styles.contentFoto}>
            <TouchableOpacity onPress={() => setModalFotoStnk(true)}>
              <AntDesign name="pluscircleo" size={35} color="#3567FC" />
            </TouchableOpacity>
            <Text style={styles.textFoto}>Upload Foto STNK</Text>
            <View style={styles.contentTrash}>
              <FontAwesome name="trash-o" size={24} color="#FFFFFF" />
            </View>
          </View>
          <Text style={styles.textFoto2}>
            * Data pada foto STNK harus terlihat jelas
          </Text>
          {error.fotoStnk && (
            <Text style={styles.errorForm}>{error.fotoStnk}</Text>
          )}
        </View>
      </View>

      <ModalPhoto
        form={form}
        setForm={setForm}
        modalFotoSelfie={modalFotoSelfie}
        setModalFotoSelfie={setModalFotoSelfie}
        modalFotoKtp={modalFotoKtp}
        setModalFotoKtp={setModalFotoKtp}
        modalFotoSim={modalFotoSim}
        setModalFotoSim={setModalFotoSim}
        modalFotoStnk={modalFotoStnk}
        setModalFotoStnk={setModalFotoStnk}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerForm: {
    flex: 1,
  },
  contentFormIcon: {
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
  contentInput: {
    width: "100%",
    marginBottom: 50,
    display: "flex",
    flexDirection: "column",
  },
  subContentInput: {
    marginBottom: 20,
    display: "flex",
    flexDirection: "column",
  },
  labelInput: {
    marginBottom: 10,
    fontSize: 12,
    fontWeight: "700",
    color: "#3567FC",
  },
  contentFoto: {
    height: 150,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderColor: "#A8A8A8",
    borderWidth: 1,
  },
  textFoto: {
    marginTop: 10,
    fontSize: 12,
    color: "#A8A8A8",
  },
  textFoto2: {
    marginTop: 10,
    fontSize: 10,
    color: "#3567FC",
  },
  contentTrash: {
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: 5,
    borderTopLeftRadius: 10,
    backgroundColor: "#FA878D",
  },
  errorForm: {
    width: "100%",
    paddingHorizontal: 10,
    alignSelf: "center",
    textAlign: "justify",
    fontSize: 11,
    color: "red",
  },
});

export default Form2;
