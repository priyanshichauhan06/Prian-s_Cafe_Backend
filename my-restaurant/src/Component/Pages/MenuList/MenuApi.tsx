export const MenuApis = {
    getAll: async () => {
        const response = await fetch("https://localhost:7211/api/MenuTable");
        return response.json();
    },
    getById: async (id: number) => {
        const response = await fetch(`https://localhost:7211/api/MenuTable/${id}`);
        return response.json();
    },
    create: async (data: any) => {
        const response = await fetch("https://localhost:7211/api/MenuTable", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        return response.json();
    }
}



