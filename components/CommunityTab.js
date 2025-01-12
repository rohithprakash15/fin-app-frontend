import React, { useState } from "react";
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

const CommunityTab = () => {
  const [discussionText, setDiscussionText] = useState("");

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Financial Community Forum</Text>
          <Text style={styles.subtitle}>Learn, Share, Grow Together</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textarea}
            placeholder="Ask your question about savings, business, or banking..."
            placeholderTextColor="#666"
            multiline
            value={discussionText}
            onChangeText={setDiscussionText}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              alert("Question Posted!");
              setDiscussionText("");
            }}
          >
            <Ionicons name="send" size={20} color="white" />
            <Text style={styles.buttonText}>Post Question</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.discussionsContainer}>
          <View style={styles.discussionCard}>
            <View style={styles.userInfo}>
              <Ionicons name="person-circle" size={40} color="#FF69B4" />
              <View style={styles.userTextContainer}>
                <Text style={styles.username}>Lakshmi Devi</Text>
                <Text style={styles.timestamp}>2 hours ago</Text>
              </View>
            </View>
            <Text style={styles.discussionText}>
              मैंने अपना पहला बचत खाता खोला! क्या कोई मुझे बता सकता है कि ATM
              कार्ड का उपयोग कैसे करें? 🏦
              {"\n\n"}
              (I opened my first savings account! Can someone guide me on how to
              use an ATM card?)
            </Text>
          </View>

          <View style={styles.discussionCard}>
            <View style={styles.userInfo}>
              <Ionicons name="person-circle" size={40} color="#FF69B4" />
              <View style={styles.userTextContainer}>
                <Text style={styles.username}>Meena Kumari</Text>
                <Text style={styles.timestamp}>5 hours ago</Text>
              </View>
            </View>
            <Text style={styles.discussionText}>
              मैं अपना छोटा सिलाई का व्यवसाय शुरू करना चाहती हूं। मुद्रा लोन के
              बारे में कोई जानकारी दे सकता है? 💰
              {"\n\n"}
              (I want to start my small tailoring business. Can anyone provide
              information about Mudra loans?)
            </Text>
          </View>

          <View style={styles.discussionCard}>
            <View style={styles.userInfo}>
              <Ionicons name="person-circle" size={40} color="#FF69B4" />
              <View style={styles.userTextContainer}>
                <Text style={styles.username}>Radha Kumari</Text>
                <Text style={styles.timestamp}>1 day ago</Text>
              </View>
            </View>
            <Text style={styles.discussionText}>
              मैंने स्वयं सहायता समूह से 10,000 रुपये बचाए! अब मैं अपनी बेटी की
              पढ़ाई के लिए FD करना चाहती हूं। ✨{"\n\n"}
              (I saved Rs. 10,000 through Self Help Group! Now I want to create
              an FD for my daughter's education.)
            </Text>
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
  inputContainer: {
    padding: 16,
    backgroundColor: "#fff",
    marginVertical: 8,
  },
  textarea: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    padding: 12,
    minHeight: 100,
    backgroundColor: "#fff",
    fontSize: 16,
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#FF69B4",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
  discussionsContainer: {
    padding: 16,
  },
  discussionCard: {
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
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  userTextContainer: {
    marginLeft: 12,
  },
  username: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  timestamp: {
    fontSize: 14,
    color: "#666",
  },
  discussionText: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
  },
});

export default CommunityTab;
