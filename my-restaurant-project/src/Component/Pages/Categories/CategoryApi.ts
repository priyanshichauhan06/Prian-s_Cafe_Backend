export const CategoryApi = {
    getAll: async () => {
        const response =await fetch("https://localhost:7211/api/CategoryTables");
        return response.json();
    },
    getById: async (id: number) => {
        const response=await fetch(`https://localhost:7211/api/CategoryTables/catId=${id}`);
        return response.json();
    }, 
    getByMenuId: async (menuid: number) => {
        const response=await fetch(`https://localhost:7211/api/CategoryTables/menuId=${menuid}`);
        return response.json();
    },
    create: async (data: any) => {
        const response = await fetch(`https://localhost:7211/api/CategoryTables/${data}`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        return response.json();
    },
    edit: async (data: any) => {
        const response = await fetch(`https://localhost:7211/api/CategoryTables/${data}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        return response.json();
    },
    delete: async (data: any) => {
        const response = await fetch(`https://localhost:7211/api/CategoryTables/${data}`, {
            method: "DELETE",
        });
        return response.json();
    },
}