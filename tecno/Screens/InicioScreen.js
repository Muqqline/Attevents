import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AuthContexto } from '../contextos/AuthContexto';
import styles from './styles/InicioStyles';

const InicioScreen = () => {
  const { usuario, cerrarSesion } = useContext(AuthContexto);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.bienvenido}>¡Bienvenido! 😊</Text>
        <Text style={styles.email}>{usuario?.email}</Text>
      </View>
      <View style={styles.cuerpo}>
        <Text style={styles.subtitulo}>Próximos Eventos</Text>
      </View>
      <TouchableOpacity style={styles.botonCerrar} onPress={cerrarSesion}>
        <Text style={styles.botonTexto}>Cerrar Sesión 🔒</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InicioScreen; 