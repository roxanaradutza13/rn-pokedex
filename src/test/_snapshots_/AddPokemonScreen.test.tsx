import { render } from "@testing-library/react-native";
import { Button, ScrollView, TextInput} from "react-native";

test('component TextInput Nombre del Pokémon mounts properly', () => {
    const wrapper = render(<TextInput placeholder="Nombre del Pokémon"/>)
    expect(wrapper).toBeTruthy()
})
test('component TextInput Tipo Pokémon mounts properly', () => {
    const wrapper = render(<TextInput placeholder="Tipo del Pokémon"/>)
    expect(wrapper).toBeTruthy()
})
test('component TextInput NIvel Pokémon mounts properly', () => {
    const wrapper = render(<TextInput placeholder="Nivel del Pokémon"/>)
    expect(wrapper).toBeTruthy()
})
test('component Button Submit mounts properly', () => {
    const wrapper = render(<Button title="Submit"/>)
    expect(wrapper).toBeTruthy()
})