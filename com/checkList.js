import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import { useEffect, useState } from "react";

function Check() {
  const [isChecked, setChecked] = useState(false);
  ahh;
  return (
    <>
      <View>
        <Text>uranohome</Text>
      </View>
      <View>
        <Text>todoList</Text>
        <View>
          <View>
            <Text>料理を作る</Text>
          </View>
          <View></View>
          <Text>洗濯物をたたむ</Text>
          <Text>買い物に行く</Text>
          <Text>todoListに追加</Text>
        </View>
      </View>
      <View>
        <View>
          <TouchableOpacity>
            <Text>家に帰る</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>ありがとう</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
export default Check;
