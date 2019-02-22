import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

const styles = require('./../../styles/HomeScreen');
const lang = require('./../../lang/es.json');
export default class UserHomeScreen extends React.Component {
  static navigationOptions = {
    title: lang.home.title,
    headerStyle: { backgroundColor: '#285caf' },
    headerTitleStyle: { fontSize: 30, flex: 1, color: '#ffffff', textAlign: 'center', alignItems: 'center', alignSelf: 'center' },
  };

  state = {
    ...lang,
    newsFeed: [
      {
        title: 'Saca el paraguas',
        subtitle: 'Se pronostica un día parcialmente nublado con un minimo de 5 grados y rafagas de viento a 14 Km/h',
        date: '20/02/2019 21:59',
        avatar: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/nX1tYZQ/timelapse-of-a-cloudy-sky-just-before-a-storm-video-about-nature-cloud-storm-water-weather-rain-climate-change-paradise-heaven_reupeghzg_thumbnail-full01.png'
      }, {
        avatar: 'https://www.soe.uagrm.edu.bo/wp-content/uploads/2017/03/default-avatar-ginger-guy.png',
        title: 'Antonio Nuñes',
        subtitle: 'Nuevo paseador en Pet Eco',
        date: '20/02/2019 20:59',
      }, {
        title: 'Excelente clima para pasear',
        subtitle: 'Se pronostica un día despejado con un minimo de 24 grados',
        avatar: 'https://previews.123rf.com/images/djvstock/djvstock1709/djvstock170906533/85720624-sunny-day-and-thermometer-of-weather-and-climate-theme-vector-illustration.jpg',
        date: '20/02/2019 13:59',
      }, {
        avatar: 'https://st2.depositphotos.com/1007566/12304/v/950/depositphotos_123041468-stock-illustration-avatar-man-cartoon.jpg',
        title: 'Juan Perez',
        subtitle: 'Ha recibido 12k calificaciones de 5 estrellas!',
        date: '19/02/2019 07:59',
      }, {
        avatar: 'https://animalesdomesticos.co/wp-content/uploads/2018/11/Nombre-para-perros.jpg',
        title: 'Cuida a tu mejor amigo ',
        subtitle: 'EL día de hoy en México se ha aprobado la ley que protege a nuestros amigo y nos permite saber donde estan todo el tiempo',
        date: '19/02/2019 07:59',
      },
    ]
  }

  render() {
    return (
      <ScrollView stylle={styles.container}>
        {
          this.state.newsFeed.map(
            (feed, key) => {
              return <Card
                key={key.toString()}
                title={feed.title}
                image={{ uri: feed.avatar }}>
                <Text style={{ marginBottom: 10, textAlign: 'justify' }}>
                  {feed.subtitle}
                </Text>
              </Card>
            }
          )
        }
      </ScrollView>
    );
  }

}