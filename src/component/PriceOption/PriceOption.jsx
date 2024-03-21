import Price from "./Price";

const PriceOption = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic",
            "price": "$30/month",
            "features": [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Access to locker rooms and showers",
                "Free WiFi",
                "24/7 access"
            ]
        },
        {
            "id": 2,
            "name": "Standard",
            "price": "$50/month",
            "features": [
                "All Basic features",
                "Access to group fitness classes",
                "Access to sauna and steam room",
                "Access to nutrition consultation",
                "Discounts on gym merchandise"
            ]
        },
        {
            "id": 3,
            "name": "Premium",
            "price": "$80/month",
            "features": [
                "All Standard features",
                "Access to personal trainer sessions (2 per month)",
                "Access to swimming pool",
                "Access to exclusive members lounge",
                "Complimentary towel service"
            ]
        }
    ];

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best price in the town</h2>

            <div className="grid md:grid-cols-3 gap-6">

                {
                    priceOptions.map(option => <Price key={option.id} option={option} />)
                }
            </div>

        </div>
    );
};

export default PriceOption;
