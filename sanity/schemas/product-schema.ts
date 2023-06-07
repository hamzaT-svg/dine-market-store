const product = {
    name: "product",
    title: "Products",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "name" }
        },
        {
            name: "type",
            title: "Type",
            type: "string",
        },
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [{
                type: 'image',
                fields: [
                    {
                        name: "alt",
                        title: "Alt",
                        type: "string"
                    },
                ],
                options: { hotspot: true },
            }]
        },
        {
            name: "price",
            title: "Price",
            type: "number"
        },
        {
            name: "details",
            title: "Details",
            type: "array",
            of: [{ type: "block" }]
        },

        {
            name: "care",
            title: "Care",
            type: "array",
            of: [{ type: "block" }]
        },
        {
            name: "category",
            title: "Category",
            type: "reference",
            to: { type: 'category' },
        }
    ]
};


export default product;