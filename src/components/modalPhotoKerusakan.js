import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import {
  StyleSheet,
  View,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

function ModalPhotoKerusakan(props) {
  const {
    form,
    setForm,
    modalFotoKerusakan,
    setModalFotoKerusakan,
    index,
    element,
  } = props;

  const handleOpenGallery = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        // base64: true,
        // allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        allowsMultipleSelection: false,
      });

      delete result.cancelled;

      if (!result.canceled) {
        const foto = {
          uri: result.assets[0].uri,
          fileName: result.assets[0].fileName,
          filesize: result.assets[0].filesize,
          mimeType: result.assets[0].mimeType,
        };

        let updatedFotoKerusakan = [...form.fotoKerusakan];
        if (!updatedFotoKerusakan[index]) {
          updatedFotoKerusakan[index] = {};
        }
        updatedFotoKerusakan[index] = foto;
        setForm({ ...form, fotoKerusakan: updatedFotoKerusakan });
      }
    } catch (error) {
      console.log("photo failed to select", error);
    }
  };

  const handleOpenCamera = async () => {
    try {
      await ImagePicker.requestCameraPermissionsAsync();
      let result = await ImagePicker.launchCameraAsync({
        cameraType: ImagePicker.CameraType.front,
        // base64: true,
        // allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
        allowsMultipleSelection: false,
      });

      delete result.cancelled;

      if (!result.canceled) {
        const foto = {
          uri: result.assets[0].uri,
          fileName: result.assets[0].fileName,
          filesize: result.assets[0].filesize,
          mimeType: result.assets[0].mimeType,
        };

        let updatedFotoKerusakan = [...form.fotoKerusakan];
        if (!updatedFotoKerusakan[index]) {
          updatedFotoKerusakan[index] = {};
        }
        updatedFotoKerusakan[index] = foto;
        setForm({ ...form, fotoKerusakan: updatedFotoKerusakan });
      }
    } catch (error) {
      console.log("camera error", error);
    }
  };

  const handleDeskripsiKerusakanChange = (value) => {
    const updatedDeskripsi = [...form.deskripsiKerusakan];
    updatedDeskripsi[index] = value;
    setForm({ ...form, deskripsiKerusakan: updatedDeskripsi });
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalFotoKerusakan}
        onRequestClose={() => {
          setModalFotoKerusakan(false);
        }}
      >
        <TouchableOpacity
          style={styles.centeredView}
          activeOpacity={1}
          onPressOut={() => {
            setModalFotoKerusakan(false);
          }}
        >
          <View style={styles.modalViewPhotoKerusakan}>
            <View style={styles.subContentPhotoKerusakan}>
              <Text style={styles.textDeskripsi}>
                Foto Kerusakan {index + 1}
              </Text>
              <TouchableOpacity
                style={styles.btnUpload}
                onPress={handleOpenGallery}
              >
                <FontAwesome name="photo" size={24} color="#3567FC" />
                <Text style={styles.textUpload}>Pilih dari Galeri</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnUpload}
                onPress={handleOpenCamera}
              >
                <FontAwesome name="camera" size={24} color="#3567FC" />
                <Text style={styles.textUpload}>Ambil Foto</Text>
              </TouchableOpacity>
              <Text style={styles.textFilename}>
                File :{" "}
                {element
                  ? element.length > 20
                    ? element.slice(0, 20) + "..."
                    : element
                  : ""}
              </Text>
            </View>
            <View style={styles.subContentPhotoKerusakan}>
              <Text style={styles.textDeskripsi}>Deskripsi</Text>
              <TextInput
                style={styles.deskripsiKerusakan}
                placeholder="Deskripsi kerusakan"
                multiline={true}
                numberOfLines={4}
                value={form.deskripsiKerusakan[index]}
                onChangeText={handleDeskripsiKerusakanChange}
              />
            </View>
            <View style={styles.subContentButtonSimpan}>
              <TouchableOpacity
                style={styles.btnSimpan}
                onPress={() => setModalFotoKerusakan(false)}
              >
                <Text style={styles.textSimpan}>Tambah</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    width: "80%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  modalViewProfile: {
    width: "100%",
    margin: 20,
    padding: 35,
    borderRadius: 20,
    alignItems: "flex-end",
    backgroundColor: "#FFFFFF",
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  contentInputProfile: {
    width: "100%",
  },
  modalViewPhotoKerusakan: {
    width: "100%",
    margin: 20,
    flexDirection: "column",
    justifyContent: "center",
    gap: 30,
    padding: 35,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  subContentPhotoKerusakan: {
    width: "100%",
  },
  textDeskripsi: {
    marginBottom: 5,
    fontSize: 12,
    color: "#3567FC",
  },
  btnUpload: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  textUpload: {
    marginLeft: 10,
    fontSize: 12,
    color: "#A8A8A8",
  },
  textFilename: {
    fontSize: 12,
    color: "#3567FC",
  },
  deskripsiKerusakan: {
    borderColor: "#A8A8A8",
    borderWidth: 1,
    padding: 0,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 12,
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

export default ModalPhotoKerusakan;
