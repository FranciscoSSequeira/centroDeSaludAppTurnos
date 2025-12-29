interface IAppointment {
    id: number;
    date: string;
    time: string;
    userId: string;
    status: "active" | "cancelled";
}

export default IAppointment;