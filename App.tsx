import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [fecha, setFecha] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [concept, setConcept] = useState("");
  const [code, setCode] = useState("");
  const [account, setAccount] = useState("");
  const [debito, setDebito] = useState("");
  const [credito, setCredito] = useState("");

  const saveDate = (text: string) => {
    if (text.length >= 12 && text !== "2022-07-29") {
      alert("error en la fecha");
      return;
    }

    if (text.length >= 12) {
      setFecha(text);
    }
  };

  const saveJournal = () => {
    console.log(` \n La fecha es: ${fecha} \n\n`);
    console.log(`Nombre Completo: ${nombre}  ${apellido} \n\n`);
    console.log(`Descripción: ${concept} \n\n`);
    console.log(`El codigop es: ${code} \n\n`);
    console.log(`El numero de cuenta es: ${account} \n\n`);
  };

  const saveName = (text: string) => {
    setNombre(text);
  };

  const saveLastName = (text: string) => {
    setApellido(text);
  };

  const saveConcept = (text: string) => {
    setConcept(text);
  };

  const saveCode = (text: string) => {
    setCode(text);
  };

  const saveAccount = (text: string) => {
    setAccount(text);
  };

  const isNumber = (text: string) => {
    const TextIsNumber = Number(text);
    return !Number.isNaN(TextIsNumber);
  };

  const saveDebito = (text: string) => {
    setDebito(text);
  };

  const saveCredito = (text: string) => {
    setCredito(text);
  };

  return (
    <View>
      <Text>App Journals</Text>
      <Text>Fecha: </Text>
      <TextInput placeholder="Fecha" onChangeText={(text) => saveDate(text)} />

      <Text>Nombre: </Text>
      <TextInput placeholder="Nombre" onChangeText={(text) => saveName(text)} />

      <Text>Apellido: </Text>
      <TextInput
        placeholder="Apellido"
        onChangeText={(text) => saveLastName(text)}
      />

      <Text>Concepto: </Text>
      <TextInput
        placeholder="Concepto"
        onChangeText={(text) => saveConcept(text)}
      />

      <View>
        <Text>Codigo: </Text>
        <TextInput
          placeholder="Codigo"
          onChangeText={(text) => saveCode(text)}
        />

        <Text>Cuenta: </Text>
        <TextInput
          placeholder="Cuenta"
          onChangeText={(text) => saveAccount(text)}
        />

        <Text>Debito: </Text>
        <TextInput
          placeholder="Debito"
          onChangeText={(text) => saveDebito(text)}
        />

        <Text>Credito: </Text>
        <TextInput
          placeholder="Credito"
          onChangeText={(text) => saveCredito(text)}
        />

        <Button title="Guardar" onPress={() => saveJournal()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
