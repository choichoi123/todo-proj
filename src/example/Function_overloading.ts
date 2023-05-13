function add(firstParam: string, secondParam: string): string;
function add(firstParam: number, secondParam: number): number;

function add(firstParam: any, secondParam: any): any {
    console.log(firstParam + secondParam);
}

add(10,20);
add('10','20');