import { render } from "@testing-library/react-native";
import { View, Text } from "react-native";
import renderer from 'react-test-renderer';

test('component View mounts properly', () => {
    const wrapper = render(<View />)
    expect(wrapper).toBeTruthy()
})
test('component Text with Pokemon wartortle mounts properly', () => {
    const wrapper = render(<Text>wartortle</Text>)
    expect(wrapper).toBeTruthy()
})
test('component Text with Pokemon wartortle id #8 mounts properly', () => {
    const wrapper = render(<Text>#8</Text>)
    expect(wrapper).toBeTruthy()
})

test('SnapShot Text wartortle correctly', () => {
    const tree = renderer.create(<Text>wartortle</Text>).toJSON();
    expect(tree).toMatchSnapshot();
});