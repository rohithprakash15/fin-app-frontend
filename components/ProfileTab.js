import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProfileTab = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>User Profile</Text>
          <Text style={styles.subtitle}>Complete your profile details</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Ionicons
              name="card"
              size={20}
              color="#666"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Aadhar Number"
              placeholderTextColor="#666"
            />
          </View>

          <View style={styles.inputGroup}>
            <Ionicons
              name="call"
              size={20}
              color="#666"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Mobile Number"
              placeholderTextColor="#666"
            />
          </View>

          <TouchableOpacity
            style={styles.voiceButton}
            onPress={() => alert("Recording...")}
          >
            <Ionicons name="mic" size={24} color="white" />
            <Text style={styles.buttonText}>Record Voice Sample</Text>
          </TouchableOpacity>

          <Text style={styles.note}>Speak in your preferred language</Text>

          <View style={styles.grid}>
            <View style={styles.gridItem}>
              <TextInput
                style={styles.gridInput}
                placeholder="Age"
                placeholderTextColor="#666"
              />
            </View>
            <View style={styles.gridItem}>
              <TextInput
                style={styles.gridInput}
                placeholder="Annual Income"
                placeholderTextColor="#666"
              />
            </View>
            <View style={styles.gridItem}>
              <TextInput
                style={styles.gridInput}
                placeholder="Community"
                placeholderTextColor="#666"
              />
            </View>
            <View style={styles.gridItem}>
              <TextInput
                style={styles.gridInput}
                placeholder="Gender"
                placeholderTextColor="#666"
              />
            </View>
            <View style={styles.gridItem}>
              <TextInput
                style={styles.gridInput}
                placeholder="Education"
                placeholderTextColor="#666"
              />
            </View>
            <View style={styles.gridItem}>
              <TextInput
                style={styles.gridInput}
                placeholder="Residence"
                placeholderTextColor="#666"
              />
            </View>
            <View style={styles.gridItem}>
              <TextInput
                style={styles.gridInput}
                placeholder="Birthplace"
                placeholderTextColor="#666"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#fff",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF69B4",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  formContainer: {
    padding: 16,
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: "#333",
  },
  voiceButton: {
    backgroundColor: "#FF69B4",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
  note: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 16,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -6,
  },
  gridItem: {
    width: "50%",
    padding: 6,
  },
  gridInput: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    color: "#333",
  },
});

export default ProfileTab;
