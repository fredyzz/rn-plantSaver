import { Image, useWindowDimensions } from "react-native";

export function PlantSaverImage() {
  const { width } = useWindowDimensions();
  const imageSize = Math.min(width / 1.5, 400);

  return (
    <Image
      source={require("@/assets/plantSaver.png")}
      style={{ width: imageSize, height: imageSize }}
    />
  );
}
