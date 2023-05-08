export const DishApi = {
    getAll: async () => {
        const response =await fetch("https://localhost:7211/api/DishTable");
        return response.json();
    },
    getById: async (id: number) => {
        const response=await fetch(`https://localhost:7211/api/DishTable/dishId=${id}`);
        return response.json();
    }, 
    getByCatId: async (catid: number) => {
        const response=await fetch(`https://localhost:7211/api/DishTable/catId=${catid}`);
        return response.json();
    },
    create: async (data: any) => {
        const response = await fetch(`https://localhost:7211/api/DishTable/${data}`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        return response.json();
    },
    edit: async (data: any) => {
        const response = await fetch(`https://localhost:7211/api/DishTable/${data}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        return response.json();
    },
    delete: async (data: any) => {
        const response = await fetch(`https://localhost:7211/api/DishTable/${data}`, {
            method: "DELETE",
        });
        return response.json();
    },
}