const Form = ({ order, setOrder, submitting, handleSubmit }) => {
  return (
    <div>
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="orderid"
            >
              LR Number
            </label>
            <input
              value={order.orderid}
              onChange={(e) => setOrder({ ...order, orderid: e.target.value })}
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="orderid"
              type="text"
            />
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="dateofbooking"
            >
              Date of Booking
            </label>
            <input
              value={order.dateofbooking}
              onChange={(e) =>
                setOrder({ ...order, dateofbooking: e.target.value })
              }
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="dateofbooking"
              type="text"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="from"
            >
              From
            </label>
            <input
              value={order.originstation}
              onChange={(e) =>
                setOrder({ ...order, originstation: e.target.value })
              }
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="from"
              type="text"
            />
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="to"
            >
              To
            </label>
            <input
              value={order.deliverystation}
              onChange={(e) =>
                setOrder({ ...order, deliverystation: e.target.value })
              }
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="to"
              type="text"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="noofpackages"
            >
              No. of Packages
            </label>
            <input
              value={order.noofpackages}
              onChange={(e) =>
                setOrder({ ...order, noofpackages: e.target.value })
              }
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="noofpackages"
              type="text"
            />
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="chargedweight"
            >
              Charged Weight
            </label>
            <input
              value={order.chargedweight}
              onChange={(e) =>
                setOrder({ ...order, chargedweight: e.target.value })
              }
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="chargedweight"
              type="text"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="deliverytype"
            >
              Delivery Type
            </label>
            <input
              value={order.deliverytype}
              onChange={(e) =>
                setOrder({ ...order, deliverytype: e.target.value })
              }
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="deliverytype"
              type="text"
            />
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="status"
            >
              Status
            </label>
            <input
              value={order.status}
              onChange={(e) => setOrder({ ...order, status: e.target.value })}
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="status"
              type="text"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6 justify-center">
          <button
            type="submit"
            className="p-4 bg-gray-600 rounded-xl hover:bg-slate-800"
          >
            {submitting
              ? "Updating Consignment Details"
              : "Update Consignment Details"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
