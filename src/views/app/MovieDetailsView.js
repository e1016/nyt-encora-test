import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native'
import Section from '../../components/Section'
import colors from '../../utils/colors'



function MovieDetailsView (props) {
  const { display_title, headline, byline, summary_short, publication_date, multimedia, link } = props.route.params
  const navigation = useNavigation()
  
  useEffect(() => {
    navigation.setOptions({ title: display_title })
  }, [])

  function openReview () {
    Linking.openURL(link.url)
  }

  return (
    <ScrollView style={ s.container }>
      <Image source={{ uri: multimedia.src }} style={s.cover}/>

      <Section>
        <Text style={s.title}>{display_title}</Text>
      </Section>

      <Section>
        <Text style={s.text}>by {byline}</Text>
      </Section>

      <Section>
        <Text style={s.text}>{headline}</Text>
      </Section>

      <Section>
        <Text style={s.text}>{summary_short}</Text>
      </Section>

      <Section>
        <Text style={s.publicationDate}>{publication_date}</Text>
      </Section>

      <Section>
        <TouchableOpacity onPress={openReview} activeOpacity={0.8}>
          <Text style={s.link}>
            Read the New York Times Review of {display_title} →
          </Text>
        </TouchableOpacity>
      </Section>
    </ScrollView>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1
  },
  cover: {
    width: '100%',
    height: 250
  },
  title: {
    fontSize: 19,
    color: colors.TEXT
  },
  text: {
    fontSize: 15,
    color: colors.TEXT,
  },
  publicationDate: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.SECONDARY_TEXT
  },
  link: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.LINK
  }
})

export default MovieDetailsView
