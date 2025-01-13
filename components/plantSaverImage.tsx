import { Image, useWindowDimensions } from "react-native";

type Props = {
  size?: number;
};

export function PlantSaverImage({ size }: Props) {
  const { width } = useWindowDimensions();
  const imageSize = size ?? Math.min(width / 1.5, 400);

  return (
    <Image
      source={require("@/assets/plantSaver.png")}
      style={{ width: imageSize, height: imageSize }}
    />
  );
}
