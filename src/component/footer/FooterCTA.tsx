const FooterCTA = () => {
  return (
    <div>
      <h2> Sign up to newsletter</h2>

      <p>
        Enter your email address to get $10 off your first order and free
        shipping.Updates information on Sales and Offers.
      </p>

      <input
        type="text"
        placeholder="Enter your email..."
        onChange={(e) => e.preventDefault()}
      />
    </div>
  );
};

export default FooterCTA;
