import { Link, Stack, useRouter } from "expo-router";

export default function ChatLayout() {
  const router = useRouter();

  return (
    <Stack>
        <Stack.Screen
            name="index"
            options={{
                title: "Search",
                headerShown: false
            }}
        />
    </Stack>
  );
}