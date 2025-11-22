import dayjs from "dayjs";

export const isDate = (value: string) => {

    if (!value) {
        return false;
    }

    const fecha = dayjs(value);
    if (fecha.isValid()) {
        return true;
    } else {
        return false;
    }
}