export interface Passenger{
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Nestor'
}

const passenger2: Passenger = {
    name: 'Paz',
    children: ['Emi', 'Constanso']
}

const printChildren = (passenger: Passenger): void => {
    const howManyChildren = passenger.children?.length || 0;
    console.log(passenger.name, howManyChildren);
}

printChildren(passenger1);