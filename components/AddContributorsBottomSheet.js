import { useState } from "react";
import {
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { COLORS } from "../constants/colors";
import { Caption, H2, P } from "./Typography";

const AddContributorsBottomSheet = ({ isVisible, onClose, contributors = [], onConfirm }) => {
  // Calculate default contributors if none are provided
  const [contributorsList, setContributorsList] = useState(
    contributors.length > 0
      ? contributors
      : [
          { id: 1, name: "Rajesh Kumar" },
          { id: 2, name: "Priya Sharma" },
          { id: 3, name: "Amit Patel" },
          { id: 4, name: "Sneha Reddy" },
          { id: 5, name: "Vikram Singh" },
        ]
  );

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="none"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <TouchableOpacity style={StyleSheet.absoluteFill} onPress={onClose} />
        <View style={styles.bottomSheet}>
          {/* Drag Handle */}
          <View style={styles.dragHandle} />

          {/* Header */}
          <View style={styles.header}>
            <H2 style={styles.title}>Trip Contributors</H2>
            <TouchableOpacity onPress={onClose}>
              <Icon name="close" size={24} color={COLORS.text} />
            </TouchableOpacity>
          </View>

          <ScrollView contentContainerStyle={styles.content}>
            {/* Contributors List */}
            <View style={styles.contributorsListSection}>
              <View style={styles.contributorsListHeader}>
                <H2 style={styles.contributorsListTitle}>
                  Contributors
                </H2>
                <Caption style={styles.itemCount}>
                  {contributorsList.length} members
                </Caption>
              </View>

              <FlatList
                data={contributorsList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                  <View style={styles.contributorItem}>
                    {/* Avatar and Name section */}
                    <View style={styles.contributorInfo}>
                      <View style={styles.contributorRow}>
                        <View style={styles.avatar}>
                          <Text style={styles.avatarText}>
                            {item.name.charAt(0)}
                          </Text>
                        </View>
                        <P style={styles.contributorName}>{item.name}</P>
                      </View>
                    </View>
                  </View>
                )}
                scrollEnabled={false}
              />
            </View>
          </ScrollView>

          {/* Close Button at Bottom */}
          <View style={styles.confirmSection}>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={onClose}
            >
              <Text style={styles.confirmButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },
  bottomSheet: {
    backgroundColor: "#FFFFFF", // White background
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: "95%",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8,
  },
  dragHandle: {
    width: 40,
    height: 4,
    backgroundColor: "#C0C0C0",
    borderRadius: 2,
    alignSelf: "center",
    marginVertical: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E6E1D5",
  },
  title: {
    fontFamily: "PlayfairDisplay",
    fontSize: 22,
    fontWeight: "600",
    color: "#1A1A1A",
  },
  content: {
    padding: 16,
    paddingBottom: 10, // Reduced padding since confirm section is now fixed at bottom
  },
  contributorsListSection: {
    marginBottom: 16,
  },
  contributorsListHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  contributorsListTitle: {
    fontSize: 18,
  },
  itemCount: {
    color: COLORS.textSecondary,
    fontFamily: "PlayfairDisplay",
    fontSize: 16,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    backgroundColor: "#F3F4F6",
    borderWidth: 1,
    borderColor: "#D1D5DB",
  },
  contributorItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.surface,
    borderRadius: 14,
    padding: 12,
    marginBottom: 8,
  },
  contributorInfo: {
    flex: 1,
  },
  contributorRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.accent,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  avatarText: {
    color: COLORS.textInverse,
    fontWeight: "bold",
    fontSize: 16,
  },
  contributorName: {
    fontWeight: "500",
    fontFamily: "PlayfairDisplay",
  },
  confirmSection: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 10,
    borderTopWidth: 1,
    borderTopColor: "#E6E1D5",
    position: "relative",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 16,
    backgroundColor: "#FFFFFF", // Match the bottom sheet background
  },
  confirmButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    backgroundColor: COLORS.buttonGradientEnd, // Temple Orange
    borderRadius: 22,
    marginBottom: 16,
    paddingHorizontal: 20, // Added more horizontal padding
  },
  confirmButtonText: {
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.textInverse,
  },
});

