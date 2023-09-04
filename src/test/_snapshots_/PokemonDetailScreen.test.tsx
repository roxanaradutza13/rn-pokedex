import { render } from "@testing-library/react-native";
import { ScrollView} from "react-native";

test('component SafeAreaView mounts properly', () => {
    const wrapper = render(<ScrollView />)
    expect(wrapper).toBeTruthy()
})