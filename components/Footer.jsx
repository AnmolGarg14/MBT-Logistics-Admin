const Footer = () => {
  return (
    <section className="py-3">
      <div className="p-4 flex justify-between">
        <div className="flex items-center">
          <div className="font-semibold text-white">MBT Admin Panel</div>
        </div>
        <div className="flex justify-between gap-4 items-center">
          <div className="font-normal text-white">
            &copy; Copyright. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
