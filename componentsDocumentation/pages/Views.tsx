import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  RefreshControl,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from 'react-native';
import Section from '../components/Section';
import Title from '../components/Title';

const wait = (timeout: number): Promise<boolean> => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const ViewsPage = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView nestedScrollEnabled>
        <Section>
          <View style={styles.demoView}>
            <Title>View</Title>
          </View>
        </Section>
        <Section>
          <ScrollView
            style={styles.demoScrollView}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            nestedScrollEnabled>
            <Title>ScrollView</Title>
            <Text>Pull down to see RefreshControl indicator</Text>
            <View style={styles.demoView} />
          </ScrollView>
        </Section>
        <Section>
          <Title>KeyboardAvoidingView</Title>
          <KeyboardAvoidingView style={styles.demoKeyboardAvoidView}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.inner}>
                <Text style={styles.header}>Header</Text>
                <TextInput placeholder="Username" style={styles.textInput} />
                <View style={styles.btnContainer}>
                  <Button title="Submit" onPress={() => null} />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  demoView: {
    height: 300,
    backgroundColor: 'white',
  },
  demoScrollView: {
    height: 200,
    backgroundColor: 'white',
  },
  demoKeyboardAvoidView: {
    height: 500,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
  section: {
    padding: 24,
    marginTop: 24,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default ViewsPage;
