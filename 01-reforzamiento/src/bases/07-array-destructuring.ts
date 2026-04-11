const characterNames = ['Goku', 'Vegeta', 'Trunks'];

const [, , trunks] = characterNames;
console.log(trunks);


const returnsArrayFn = () => {
    return ['ABC', 123] as const;
}


const [letters, numbers] = returnsArrayFn();

console.log(letters, numbers);


const useState = (value: string) => {
    return [value, (data: string) => { console.log(data) }] as const;
}

const [name, setName] = useState('Goku');
console.log(name);
setName('Vegeta');