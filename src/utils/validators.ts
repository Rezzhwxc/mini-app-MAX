export function validEmployeeId (id: string): string | null{

    const trimmedId = id.trim();
    
    if(trimmedId.length < 1){
        return 'Введите ваш айди'
    }

    if(trimmedId.length > 5){
        return 'максимальное кол-во значений 5'
    }

    if (!/^\d+$/.test(trimmedId)) {
        return 'Используйте только числа';
    }
    
    return null
}
