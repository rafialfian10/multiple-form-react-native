import { useEffect, useState } from "react";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ModalPhotoKerusakan from "./modalPhotoKerusakan";
import collaboration from "../../assets/collaboration.png";

function Form3({ form, setForm, error, setError }) {
  const [modalFotoKerusakanIndex, setModalFotoKerusakanIndex] = useState(null);
  const [elements, setElements] = useState([]);

  useEffect(() => {
    if (Array.isArray(form.fotoKerusakan) && form.fotoKerusakan.length > 0) {
      const updatedElements = form.fotoKerusakan.map((item, index) => ({
        id: index + 1,
        foto: item,
      }));
      setElements(updatedElements);
    } else {
      setElements([]);
    }
  }, [form.fotoKerusakan]);

  const addElement = () => {
    // setElements([...elements, { id: elements.length + 1 }]);
    const newElement = { id: elements.length + 1 };
    setElements([...elements, newElement]);
  };

  const removeElement = (index) => {
    const updatedForm = { ...form };
    updatedForm.fotoKerusakan.splice(index, 1);
    updatedForm.deskripsiKerusakan.splice(index, 1);
    setForm(updatedForm);

    const updatedElements = elements.filter((_, i) => i !== index);
    updatedElements.forEach((element, i) => {
      element.id = i + 1;
    });
    setElements(updatedElements);
  };

  const handleSubmit = () => {
    const formDataJSON = JSON.stringify(form, null, 2);
    alert(formDataJSON);
  };

  return (
    <>
      <View style={styles.containerForm}>
        <View style={styles.contentFormIcon}>
          <View style={styles.subContentFormIcon1}>
            <View style={styles.subContentFormBox1}></View>
            <View style={styles.iconForm1}>
              <MaterialCommunityIcons
                name="car-outline"
                size={35}
                color="#3567FC"
              />
              <MaterialCommunityIcons
                name="shield-check"
                size={22}
                color="#3567FC"
                style={{ position: "absolute", top: 3, left: 35 }}
              />
            </View>
            <View style={styles.contentTextIconForm1}>
              <Text style={styles.textForm1}>Foto SIM & STNK</Text>
            </View>
          </View>
          <View style={styles.subContentFormIcon2}>
            <View style={styles.subContentFormBox2}></View>
            <View style={styles.iconForm2}>
              <Image
                source={collaboration}
                alt="collaboration"
                style={styles.collaborationImage}
              />
              <Ionicons
                name="checkmark-circle"
                size={22}
                color="green"
                style={{ position: "absolute", top: 13, left: 22 }}
              />
            </View>
          </View>
        </View>
        <View style={styles.contentInformationRegistrasiKlaim}>
          <View style={styles.subContentInformationRegistrasiKlaim}>
            <Text style={styles.informationRegistrasiKlaimKey}>No. Polisi</Text>
            <Text style={styles.informationRegistrasiKlaimValue}>
              B 1234 EFG
            </Text>
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
            <Text style={styles.informationRegistrasiKlaimValue}>
              VCL2007001
            </Text>
          </View>
        </View>
        {elements?.map((element, index) => (
          <View style={styles.contentFotoKerusakan} key={index}>
            <View style={styles.subContentKerusakan}>
              <TouchableOpacity
                onPress={() => setModalFotoKerusakanIndex(index)}
              >
                <AntDesign name="edit" size={20} color="green" />
              </TouchableOpacity>
              <Text style={styles.textKerusakan}>
                Foto Kerusakan {index + 1}
              </Text>
            </View>
            <View style={styles.subContentFotoKerusakan}>
              <View style={styles.fotoKerusakan}>
                <Image
                  source={{
                    uri: element.foto?.uri
                      ? element.foto.uri
                      : "https://via.placeholder.com/150",
                  }}
                  style={styles.foto}
                />
              </View>
              <View style={styles.filenameKerusakan}>
                <Text style={styles.textFilenameKerusakan}>
                  {element.foto?.fileName
                    ? element.foto.fileName.length > 20
                      ? element.foto.fileName.slice(0, 20) + "..."
                      : element.foto.fileName
                    : ""}
                </Text>
                <Text style={styles.textFilesizeKerusakan}>
                  {element.foto?.filesize
                    ? (element.foto.filesize / (1024 * 1024)).toFixed(2) + "Mb"
                    : ""}
                </Text>
              </View>
              <View style={styles.iconTrash}>
                <TouchableOpacity onPress={() => removeElement(index)}>
                  <Feather name="trash-2" size={24} color="#3567FC" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.subContentDeskripsiKerusakan}>
              <TextInput
                style={styles.deskripsiKerusakan}
                placeholder="Deskripsi kerusakan"
                multiline={true}
                numberOfLines={4}
                editable={false}
                value={form.deskripsiKerusakan[index] || ""}
              />
            </View>
            <ModalPhotoKerusakan
              form={form}
              setForm={setForm}
              modalFotoKerusakan={modalFotoKerusakanIndex === index}
              setModalFotoKerusakan={() => setModalFotoKerusakanIndex(null)}
              index={index}
              element={element.foto?.fileName}
            />
          </View>
        ))}
        <View style={styles.subContentButtonTambah}>
          <TouchableOpacity style={styles.btnTambah} onPress={addElement}>
            <AntDesign name="pluscircleo" size={28} color="#3567FC" />
            <Text style={styles.textTambahFoto}>Tambah Foto</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.subContentButtonSimpan}>
          <TouchableOpacity style={styles.btnSimpan} onPress={handleSubmit}>
            <Text style={styles.textSimpan}>Simpan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
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
  collaborationImage: {
    width: 35,
    height: 35,
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
  contentFotoKerusakan: {
    width: "100%",
  },
  subContentKerusakan: {
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  textKerusakan: {
    marginLeft: 10,
    fontSize: 12,
    fontWeight: "700",
    color: "#3567FC",
  },
  subContentFotoKerusakan: {
    width: "100%",
    height: 100,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  fotoKerusakan: {
    width: "40%",
    height: "100%",
    borderColor: "#A8A8A8",
    borderWidth: 1,
  },
  foto: {
    width: "100%",
    height: "100%",
  },
  filenameKerusakan: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#F2F7FF",
  },
  textFilenameKerusakan: {
    fontSize: 12,
    color: "#000000",
    paddingHorizontal: 5,
  },
  textFilesizeKerusakan: {
    fontSize: 10,
    color: "#A8A8A8",
    paddingHorizontal: 5,
  },
  iconTrash: {
    width: "10%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F7FF",
  },
  subContentDeskripsiKerusakan: {
    width: "100%",
    marginBottom: 10,
  },
  deskripsiKerusakan: {
    borderColor: "#A8A8A8",
    borderWidth: 1,
    padding: 0,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 12,
  },
  subContentButtonTambah: {
    width: "100%",
    height: 50,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderColor: "#A8A8A8",
    borderWidth: 1,
  },
  btnTambah: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textTambahFoto: {
    marginLeft: 5,
    color: "#3567FC",
  },
  subContentButtonSimpan: {
    width: "100%",
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#72F77D",
  },
  btnSimpan: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textSimpan: {
    color: "#FFFFFF",
  },
});

export default Form3;
