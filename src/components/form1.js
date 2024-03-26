import { useEffect, useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { GetProvinsi } from "./Common/Hooks/getProvinsi";
import { GetKota } from "./Common/Hooks/getKota";
import { GetKecamatan } from "./Common/Hooks/getKecamatan";
import { GetDesa } from "./Common/Hooks/getDesa";

function Form1({ form, setForm, error, setError }) {
  const [idProvinsi, setIdProvinsi] = useState(null);
  const [idKota, setIdKota] = useState(null);
  const [idKecamatan, setIdKecamatan] = useState(null);
  const [idDesa, setIdDesa] = useState(null);

  // provinsi
  const { provinsi } = GetProvinsi();
  const provinsiOptions = provinsi
    ? provinsi.map((item) => ({
        key: item?.id,
        value: item?.name,
      }))
    : [];

  // kota
  const { kota, refetchKota } = GetKota(idProvinsi);
  const kotaOptions = kota
    ? kota.map((item) => ({
        key: item?.id,
        value: item?.name,
      }))
    : [];

  // kecamatan
  const { kecamatan, refetchKecamatan } =
    GetKecamatan(idKota);
  const kecamatanOptions = kecamatan
    ? kecamatan.map((item) => ({
        key: item?.id,
        value: item?.name,
      }))
    : [];

  // desa
  const { desa, refetchDesa } = GetDesa(idKecamatan);
  const desaOptions = desa
    ? desa.map((item) => ({
        key: item?.id,
        value: item?.name,
      }))
    : [];

  const handleChange = (data, value) => {
    setForm({
      ...form,
      [data]: value,
    });

    if (data === "firstName") {
      setError((prevError) => ({
        ...prevError,
        firstName: value.trim() === "" ? "Nama depan wajib di isi" : "",
      }));
    }

    if (data === "lastName") {
      setError((prevError) => ({
        ...prevError,
        lastName: value.trim() === "" ? "Nama belakang wajib di isi" : "",
      }));
    }

    if (data === "biodata") {
      setError((prevError) => ({
        ...prevError,
        biodata: value.trim() === "" ? "Biodata is wajib di isi" : "",
      }));
    }

    if (data === "provinsi") {
      setIdProvinsi(value);
      setIdKota(null);
      setIdKecamatan(null);
      setIdDesa(null);
      setError((prevError) => ({
        ...prevError,
        provinsi: value.trim() === "" ? "Provinsi wajib di isi" : "",
      }));
    }

    if (data === "kota") {
      setIdKota(value);
      setIdKecamatan(null);
      setIdDesa(null);
      setError((prevError) => ({
        ...prevError,
        kota: value.trim() === "" ? "Kota wajib di isi" : "",
      }));
    }

    if (data === "kecamatan") {
      setIdKecamatan(value);
      setIdDesa(null);
      setError((prevError) => ({
        ...prevError,
        kecamatan: value.trim() === "" ? "Kecamatan wajib di isi" : "",
      }));
    }

    if (data === "desa") {
      setIdDesa(value);
      setError((prevError) => ({
        ...prevError,
        desa: value.trim() === "" ? "Desa wajib di isi" : "",
      }));
    }
  };

  useEffect(() => {
    if (idProvinsi) {
      refetchKota();
    }
    if (idKota) {
      refetchKecamatan();
    }
    if (idKecamatan) {
      refetchDesa();
    }
  }, [idProvinsi, idKota, idKecamatan]);

  return (
    <View style={styles.containerForm}>
      <View style={styles.contentFormIcon}>
        <View style={styles.subContentFormIcon1}>
          <View style={styles.subContentFormBox1}></View>
          <View style={styles.iconForm1}>
            <MaterialCommunityIcons
              name="file-document-edit-outline"
              size={35}
              color="#3567FC"
            />
          </View>
          <View style={styles.contentTextIconForm1}>
            <Text style={styles.textForm1}>Formulir klaim</Text>
          </View>
        </View>
        <View style={styles.subContentFormIcon2}>
          <View style={styles.subContentFormBox2}></View>
          <View style={styles.iconForm2}>
            <AntDesign name="idcard" size={35} color="green" />
          </View>
        </View>
      </View>

      <View style={styles.contentTextRegistrasiKlaim}>
        <Text style={styles.textRegistrasiKlaim}>
          Registrasi klaim: B 1234 EFG
        </Text>
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
        <View style={styles.subContentInformationRegistrasiKlaim}>
          <Text style={styles.informationRegistrasiKlaimKey}>Periode</Text>
          <Text style={styles.informationRegistrasiKlaimValue}>
            1 Juli 2020 - 31 Juni 2021
          </Text>
        </View>
        <View style={styles.subContentInformationRegistrasiKlaim}>
          <Text style={styles.informationRegistrasiKlaimKey}>
            Nilai Pertanggungan
          </Text>
          <Text style={styles.informationRegistrasiKlaimValue}>
            Rp.120.000.000
          </Text>
        </View>
        <View style={styles.subContentInformationRegistrasiKlaim}>
          <Text style={styles.informationRegistrasiKlaimKey}>Buatan/Merk</Text>
          <Text style={styles.informationRegistrasiKlaimValue}>
            Jepang/Honda
          </Text>
        </View>
        <View style={styles.subContentInformationRegistrasiKlaim}>
          <Text style={styles.informationRegistrasiKlaimKey}>
            Tahun Pembuatan
          </Text>
          <Text style={styles.informationRegistrasiKlaimValue}>2019</Text>
        </View>
        <View style={styles.subContentInformationRegistrasiKlaim}>
          <Text style={styles.informationRegistrasiKlaimKey}>No. Mesin</Text>
          <Text style={styles.informationRegistrasiKlaimValue}>NHX120000</Text>
        </View>
        <View style={styles.subContentInformationRegistrasiKlaim}>
          <Text style={styles.informationRegistrasiKlaimKey}>No. Rangka</Text>
          <Text style={styles.informationRegistrasiKlaimValue}>MCM24000</Text>
        </View>
      </View>

      <View style={styles.contentInput}>
        <View style={styles.subContentInput}>
          <Text style={styles.labelInput}>Nama depan</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Masukkan nama depan"
            onChangeText={(value) => handleChange("firstName", value)}
            value={form.firstName}
          />
          {error.firstName && (
            <Text style={styles.errorForm}>{error.firstName}</Text>
          )}
        </View>
        <View style={styles.subContentInput}>
          <Text style={styles.labelInput}>Nama Belakang</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Masukkan nama belakang"
            onChangeText={(value) => handleChange("lastName", value)}
            value={form.lastName}
          />
          {error.lastName && (
            <Text style={styles.errorForm}>{error.lastName}</Text>
          )}
        </View>
        <View style={styles.subContentInput}>
          <Text style={styles.labelInput}>Biodata</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Masukkan biodata"
            multiline={true}
            numberOfLines={2}
            onChangeText={(value) => handleChange("biodata", value)}
            value={form.biodata}
          />
          {error.biodata && (
            <Text style={styles.errorForm}>{error.biodata}</Text>
          )}
        </View>
        <View style={styles.subContentInput}>
          <Text style={styles.labelInput}>Provinsi</Text>
          <SelectList
            setSelected={(selectedItem) =>
              handleChange("provinsi", selectedItem)
            }
            placeholder="Pilih provinsi"
            data={provinsiOptions}
            save="key"
            style={styles.selectOptions}
            boxStyles={{
              borderColor: "#3567FC",
              borderTopWidth: 0,
              borderRightWidth: 0,
              borderLeftWidth: 0,
              borderBottomWidth: 2,
              borderRadius: 0,
              fontSize: 10,
            }}
            inputStyles={{ fontSize: 12, color: "#A8A8A8" }}
          />
          {error.provinsi && (
            <Text style={styles.errorForm}>{error.provinsi}</Text>
          )}
        </View>
        <View style={styles.subContentInput}>
          <Text style={styles.labelInput}>Kota</Text>
          <SelectList
            setSelected={(selectedItem) => handleChange("kota", selectedItem)}
            placeholder="Pilih kota"
            data={kotaOptions}
            save="key"
            style={styles.selectOptions}
            boxStyles={{
              borderColor: "#3567FC",
              borderTopWidth: 0,
              borderRightWidth: 0,
              borderLeftWidth: 0,
              borderBottomWidth: 2,
              borderRadius: 0,
              fontSize: 10,
            }}
            inputStyles={{ fontSize: 12, color: "#A8A8A8" }}
          />
          {error.kota && <Text style={styles.errorForm}>{error.kota}</Text>}
        </View>
        <View style={styles.subContentInput}>
          <Text style={styles.labelInput}>Kecamatan</Text>
          <SelectList
            setSelected={(selectedItem) =>
              handleChange("kecamatan", selectedItem)
            }
            placeholder="Pilih kecamatan"
            data={kecamatanOptions}
            save="key"
            style={styles.selectOptions}
            boxStyles={{
              borderColor: "#3567FC",
              borderTopWidth: 0,
              borderRightWidth: 0,
              borderLeftWidth: 0,
              borderBottomWidth: 2,
              borderRadius: 0,
              fontSize: 10,
            }}
            inputStyles={{ fontSize: 12, color: "#A8A8A8" }}
          />
          {error.kecamatan && (
            <Text style={styles.errorForm}>{error.kecamatan}</Text>
          )}
        </View>
        <View style={styles.subContentInput}>
          <Text style={styles.labelInput}>Desa</Text>
          <SelectList
            setSelected={(selectedItem) => handleChange("desa", selectedItem)}
            placeholder="Pilih desa"
            data={desaOptions}
            save="key"
            style={styles.selectOptions}
            boxStyles={{
              borderColor: "#3567FC",
              borderTopWidth: 0,
              borderRightWidth: 0,
              borderLeftWidth: 0,
              borderBottomWidth: 2,
              borderRadius: 0,
              fontSize: 10,
            }}
            inputStyles={{ fontSize: 12, color: "#A8A8A8" }}
          />
          {error.desa && <Text style={styles.errorForm}>{error.desa}</Text>}
        </View>
      </View>
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
    fontSize: 12,
    fontWeight: "700",
    color: "#3567FC",
  },
  textInput: {
    borderTopColor: "#FFFFFF",
    borderRightColor: "#FFFFFF",
    borderLeftColor: "#FFFFFF",
    borderBottomColor: "#3567FC",
    borderWidth: 2,
    padding: 0,
    paddingHorizontal: 10,
    fontSize: 12,
    color: "#A8A8A8",
  },
  selectOptions: {
    borderRadius: 5,
    fontSize: 12,
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

export default Form1;
