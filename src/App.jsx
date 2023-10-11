import Api from "./components/api/api";
import Counter from "./components/counter/counter";
import Form from "./components/form/form"

export default function App() {
    return (
    <>
    <h1>Counter</h1>
    <Counter />
    <Form />
    <Api />
    {/* <ClickMeBtn /> */}
    </>
    );
    }