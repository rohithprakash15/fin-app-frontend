import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const LearnTab = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Financial Education</Text>
          <Text style={styles.subtitle}>Learn Basic Financial Skills</Text>
        </View>

        <View style={styles.coursesContainer}>
          <TouchableOpacity style={styles.courseCard}>
            <View style={styles.courseIconContainer}>
              <Ionicons name="wallet" size={32} color="#FF69B4" />
            </View>
            <View style={styles.courseContent}>
              <Text style={styles.courseTitle}>Basic Banking</Text>
              <Text style={styles.courseDescription}>
                Learn about bank accounts, ATM usage, and basic transactions
              </Text>
              <View style={styles.progressBar}>
                <View style={[styles.progress, { width: "30%" }]} />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.courseCard}>
            <View style={styles.courseIconContainer}>
              <Ionicons name="cash" size={32} color="#FF69B4" />
            </View>
            <View style={styles.courseContent}>
              <Text style={styles.courseTitle}>Savings & Deposits</Text>
              <Text style={styles.courseDescription}>
                Understanding different types of savings and fixed deposits
              </Text>
              <View style={styles.progressBar}>
                <View style={[styles.progress, { width: "0%" }]} />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.courseCard}>
            <View style={styles.courseIconContainer}>
              <Ionicons name="business" size={32} color="#FF69B4" />
            </View>
            <View style={styles.courseContent}>
              <Text style={styles.courseTitle}>Small Business</Text>
              <Text style={styles.courseDescription}>
                Basic entrepreneurship and business management skills
              </Text>
              <View style={styles.progressBar}>
                <View style={[styles.progress, { width: "0%" }]} />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.courseCard}>
            <View style={styles.courseIconContainer}>
              <Ionicons name="shield-checkmark" size={32} color="#FF69B4" />
            </View>
            <View style={styles.courseContent}>
              <Text style={styles.courseTitle}>Insurance Basics</Text>
              <Text style={styles.courseDescription}>
                Understanding different types of insurance and their benefits
              </Text>
              <View style={styles.progressBar}>
                <View style={[styles.progress, { width: "0%" }]} />
              </View>
            </View>
          </TouchableOpacity>
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
  coursesContainer: {
    padding: 16,
  },
  courseCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  courseIconContainer: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF0F5",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  courseContent: {
    flex: 1,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  courseDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  progressBar: {
    height: 4,
    backgroundColor: "#f0f0f0",
    borderRadius: 2,
  },
  progress: {
    height: "100%",
    backgroundColor: "#FF69B4",
    borderRadius: 2,
  },
});

export default LearnTab;
