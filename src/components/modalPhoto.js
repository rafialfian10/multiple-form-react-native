import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import {
  StyleSheet,
  View,
  Modal,
  Alert,
  Text,
  TouchableOpacity,
} from "react-native";

function ModalPhoto(props) {
  const {
    form,
    setForm,
    modalFotoSelfie,
    setModalFotoSelfie,
    modalFotoKtp,
    setModalFotoKtp,
    modalFotoSim,
    setModalFotoSim,
    modalFotoStnk,
    setModalFotoStnk,
  } = props;

  const handleOpenGallery = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      delete result.cancelled;

      if (!result.canceled) {
        const foto = {
          uri: result.assets[0].uri,
          fileName: result.assets[0].fileName,
          fileSize: result.assets[0].fileSize,
          mimeType: result.assets[0].mimeType,
        };

        switch (true) {
          case modalFotoSelfie:
            setForm({
              ...form,
              fotoSelfie: { ...form.fotoSelfie, ...foto },
            });
            setModalFotoSelfie(false);
            setError({ ...error, fotoSelfie: "" });
            break;
          case modalFotoKtp:
            setForm({
              ...form,
              fotoKtp: { ...form.fotoKtp, ...foto },
            });
            setModalFotoKtp(false);
            break;
          case modalFotoSim:
            setForm({
              ...form,
              fotoSim: { ...form.fotoSim, ...foto },
            });
            setModalFotoSim(false);
            break;
          case modalFotoStnk:
            setForm({
              ...form,
              fotoStnk: { ...form.fotoStnk, ...foto },
            });
            setModalFotoStnk(false);
            break;
          default:
            break;
        }
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
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      delete result.cancelled;

      if (!result.canceled) {
        const foto = {
          uri: result.assets[0].uri,
          fileName: result.assets[0].fileName,
          fileSize: result.assets[0].fileSize,
          mimeType: result.assets[0].mimeType,
        };

        switch (true) {
            case modalFotoSelfie:
              setForm({
                ...form,
                fotoSelfie: { ...form.fotoSelfie, ...foto },
              });
              setModalFotoSelfie(false);
              setError({ ...error, fotoSelfie: "" });
              break;
            case modalFotoKtp:
              setForm({
                ...form,
                fotoKtp: { ...form.fotoKtp, ...foto },
              });
              setModalFotoKtp(false);
              break;
            case modalFotoSim:
              setForm({
                ...form,
                fotoSim: { ...form.fotoSim, ...foto },
              });
              setModalFotoSim(false);
              break;
            case modalFotoStnk:
              setForm({
                ...form,
                fotoStnk: { ...form.fotoStnk, ...foto },
              });
              setModalFotoStnk(false);
              break;
            default:
              break;
          }
      }
    } catch (error) {
      console.log("camera error", error);
    }
  };

  const handleDeletePhoto = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      Alert.alert(
        "Delete Photo",
        "Are you sure?",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "OK",
            onPress: async () => {
              const response = await API.delete(`/user/photo`, config);

              if (response?.status === 200) {
                alert("Foto selfie berhasil dihapus");
                setModalFoto(false);
              }
            },
          },
        ],
        { cancelable: true }
      );
    } catch (error) {
      console.log("Foto gagal di hapus", error);
    }
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={
          modalFotoSelfie || modalFotoKtp || modalFotoSim || modalFotoStnk
        }
        onRequestClose={() => {
          setModalFoto(false);
          setModalFotoKtp(false);
          setModalFotoSim(false);
          setModalFotoStnk(false);
        }}
      >
        <TouchableOpacity
          style={styles.centeredView}
          activeOpacity={1}
          onPressOut={() => {
            setModalFotoSelfie(false);
            setModalFotoKtp(false);
            setModalFotoSim(false);
            setModalFotoStnk(false);
          }}
        >
          <View style={styles.modalViewPhotoProfile}>
            <TouchableOpacity
              style={styles.btnModalPhotoProfile}
              onPress={handleOpenCamera}
            >
              <FontAwesome name="camera" size={25} color="grey" />
              <Text style={styles.textModalPhotoProfile}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnModalPhotoProfile}
              onPress={handleOpenGallery}
            >
              <FontAwesome name="image" size={25} color="grey" />
              <Text style={styles.textModalPhotoProfile}>Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnModalPhotoProfile}
              onPress={handleDeletePhoto}
            >
              <FontAwesome name="trash" size={25} color="red" />
              <Text style={styles.textModalPhotoProfile}>Remove</Text>
            </TouchableOpacity>
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
  contentInputFileProfile: {
    width: "100%",
    marginTop: 20,
  },
  selectedPhoto: {
    width: "95%",
    height: 200,
    alignSelf: "center",
  },
  deletePhoto: {
    position: "absolute",
    top: -10,
    right: -5,
    zIndex: 1,
  },
  modalViewPhotoProfile: {
    width: "100%",
    margin: 20,
    flexDirection: "row",
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
  btnModalPhotoProfile: {
    alignItems: "center",
  },
  textModalPhotoProfile: {
    marginTop: 10,
    fontWeight: "500",
    color: "grey",
  },
});

export default ModalPhoto;
