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

const SchemesTab = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Government Schemes</Text>
          <Text style={styles.subtitle}>Financial Support Programs</Text>
        </View>

        <View style={styles.schemesContainer}>
          <TouchableOpacity style={styles.schemeCard}>
            <View style={styles.schemeHeader}>
              <Ionicons name="woman" size={24} color="#FF69B4" />
              <Text style={styles.schemeTitle}>Mudra Loan Scheme</Text>
            </View>
            <Text style={styles.schemeDescription}>
              Get loans up to ₹10 lakh for small businesses without collateral
            </Text>
            <View style={styles.schemeFooter}>
              <Text style={styles.eligibility}>For: Small Entrepreneurs</Text>
              <TouchableOpacity style={styles.applyButton}>
                <Text style={styles.applyButtonText}>Apply Now</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.schemeCard}>
            <View style={styles.schemeHeader}>
              <Ionicons name="home" size={24} color="#FF69B4" />
              <Text style={styles.schemeTitle}>PM Awas Yojana</Text>
            </View>
            <Text style={styles.schemeDescription}>
              Housing scheme for rural families to build their own homes
            </Text>
            <View style={styles.schemeFooter}>
              <Text style={styles.eligibility}>For: Rural Residents</Text>
              <TouchableOpacity style={styles.applyButton}>
                <Text style={styles.applyButtonText}>Apply Now</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.schemeCard}>
            <View style={styles.schemeHeader}>
              <Ionicons name="school" size={24} color="#FF69B4" />
              <Text style={styles.schemeTitle}>Sukanya Samriddhi</Text>
            </View>
            <Text style={styles.schemeDescription}>
              Save for your daughter's education with high interest rates
            </Text>
            <View style={styles.schemeFooter}>
              <Text style={styles.eligibility}>For: Girl Child</Text>
              <TouchableOpacity style={styles.applyButton}>
                <Text style={styles.applyButtonText}>Apply Now</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.schemeCard}>
            <View style={styles.schemeHeader}>
              <Ionicons name="medical" size={24} color="#FF69B4" />
              <Text style={styles.schemeTitle}>Ayushman Bharat</Text>
            </View>
            <Text style={styles.schemeDescription}>
              Health insurance coverage up to ₹5 lakh per family per year
            </Text>
            <View style={styles.schemeFooter}>
              <Text style={styles.eligibility}>For: All Families</Text>
              <TouchableOpacity style={styles.applyButton}>
                <Text style={styles.applyButtonText}>Apply Now</Text>
              </TouchableOpacity>
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
  schemesContainer: {
    padding: 16,
  },
  schemeCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  schemeHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  schemeTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginLeft: 12,
  },
  schemeDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
    lineHeight: 20,
  },
  schemeFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  eligibility: {
    fontSize: 14,
    color: "#666",
    fontStyle: "italic",
  },
  applyButton: {
    backgroundColor: "#FF69B4",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  applyButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});

export default SchemesTab;
