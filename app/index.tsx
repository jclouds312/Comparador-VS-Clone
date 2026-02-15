import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Platform,
  Alert,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import * as Haptics from "expo-haptics";
import Animated, {
  FadeIn,
  FadeInDown,
} from "react-native-reanimated";
import Colors from "@/constants/colors";
import { Product, getProductsByBrand, compareProducts } from "@/lib/data";
import { saveComparison } from "@/lib/storage";
import ProductSelector from "@/components/ProductSelector";
import ComparisonTable from "@/components/ComparisonTable";

export default function ComparadorScreen() {
  const insets = useSafeAreaInsets();
  const [selectedA, setSelectedA] = useState<Product | null>(null);
  const [selectedB, setSelectedB] = useState<Product | null>(null);

  const softganProducts = getProductsByBrand("SOFTGAN");
  const prometalicosProducts = getProductsByBrand("Prometálicos");

  const comparisonResults =
    selectedA && selectedB ? compareProducts(selectedA, selectedB) : null;

  const handleSave = useCallback(async () => {
    if (!selectedA || !selectedB) return;
    if (Platform.OS !== "web") {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }
    const id =
      Date.now().toString() + Math.random().toString(36).substr(2, 9);
    await saveComparison({
      id,
      productAId: selectedA.id,
      productBId: selectedB.id,
      date: new Date().toLocaleDateString("es-MX", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
    });
    Alert.alert("Guardado", "La comparación se guardó correctamente.");
  }, [selectedA, selectedB]);

  const handleReset = useCallback(() => {
    if (Platform.OS !== "web") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    setSelectedA(null);
    setSelectedB(null);
  }, []);

  return (
    <View style={[styles.container, { paddingTop: Platform.OS === "web" ? 67 : insets.top }]}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.logoContainer}>
            <Ionicons name="git-compare" size={22} color={Colors.primary} />
          </View>
          <View>
            <Text style={styles.title}>ComparadorVS</Text>
            <Text style={styles.subtitle}>Pesaje Inteligente</Text>
          </View>
        </View>
        <View style={styles.headerActions}>
          {comparisonResults && (
            <Pressable
              onPress={handleSave}
              style={({ pressed }) => [
                styles.iconBtn,
                pressed && { opacity: 0.6 },
              ]}
            >
              <Ionicons name="bookmark-outline" size={22} color={Colors.text} />
            </Pressable>
          )}
          <Pressable
            onPress={() => router.push("/saved")}
            style={({ pressed }) => [
              styles.iconBtn,
              pressed && { opacity: 0.6 },
            ]}
          >
            <Ionicons name="folder-outline" size={22} color={Colors.text} />
          </Pressable>
        </View>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: Platform.OS === "web" ? 34 : insets.bottom + 20 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View entering={FadeInDown.duration(400).delay(100)}>
          <View style={styles.selectorRow}>
            <ProductSelector
              brand="SOFTGAN"
              products={softganProducts}
              selectedProduct={selectedA}
              onSelect={setSelectedA}
              brandColor={Colors.brandA}
            />
            <View style={styles.vsCircle}>
              <Text style={styles.vsCircleText}>VS</Text>
            </View>
            <ProductSelector
              brand="Prometálicos"
              products={prometalicosProducts}
              selectedProduct={selectedB}
              onSelect={setSelectedB}
              brandColor={Colors.brandB}
            />
          </View>
        </Animated.View>

        {!comparisonResults && (
          <Animated.View
            style={styles.emptyState}
            entering={FadeIn.duration(500).delay(300)}
          >
            <View style={styles.emptyIconContainer}>
              <Ionicons
                name="swap-horizontal"
                size={40}
                color={Colors.textMuted}
              />
            </View>
            <Text style={styles.emptyTitle}>
              Selecciona dos productos para comparar
            </Text>
            <Text style={styles.emptyText}>
              Elige un producto de SOFTGAN y otro de Prometálicos
            </Text>
          </Animated.View>
        )}

        {comparisonResults && selectedA && selectedB && (
          <Animated.View entering={FadeInDown.duration(500).delay(100)}>
            <ComparisonTable
              results={comparisonResults}
              brandAName={selectedA.name}
              brandBName={selectedB.name}
            />

            <Pressable
              style={({ pressed }) => [
                styles.resetBtn,
                pressed && { opacity: 0.7 },
              ]}
              onPress={handleReset}
            >
              <Ionicons name="refresh" size={18} color={Colors.textSecondary} />
              <Text style={styles.resetText}>Nueva comparación</Text>
            </Pressable>
          </Animated.View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: Colors.surfaceBorder,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  logoContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: `${Colors.primary}15`,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Inter_700Bold",
    fontSize: 18,
    color: Colors.text,
  },
  subtitle: {
    fontFamily: "Inter_400Regular",
    fontSize: 11,
    color: Colors.textSecondary,
    marginTop: 1,
  },
  headerActions: {
    flexDirection: "row",
    gap: 4,
  },
  iconBtn: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  selectorRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 10,
  },
  vsCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.surfaceLight,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.surfaceBorder,
    marginBottom: 2,
  },
  vsCircleText: {
    fontFamily: "Inter_700Bold",
    fontSize: 10,
    color: Colors.textMuted,
    letterSpacing: 1,
  },
  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
    gap: 12,
  },
  emptyIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.surface,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.surfaceBorder,
    marginBottom: 8,
  },
  emptyTitle: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 16,
    color: Colors.text,
    textAlign: "center",
  },
  emptyText: {
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    color: Colors.textSecondary,
    textAlign: "center",
    paddingHorizontal: 40,
  },
  resetBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 14,
    marginTop: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.surfaceBorder,
    backgroundColor: Colors.surface,
  },
  resetText: {
    fontFamily: "Inter_500Medium",
    fontSize: 14,
    color: Colors.textSecondary,
  },
});
