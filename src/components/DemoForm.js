"use client";

const states = [
  "Andhra Pradesh","Andaman and Nicobar Islands","Arunachal Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh",
  "Dadar and Nagar Haveli","Daman and Diu","Delhi","Lakshadweep","Puducherry","Goa","Gujarat","Haryana",
  "Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra",
  "Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana",
  "Tripura","Uttar Pradesh","Uttarakhand","West Bengal"
];

export default function DemoForm() {
  return (
    <form className="demo-form" onSubmit={(e) => e.preventDefault()} action="">
      <label><span>Your Name</span><input name="name" placeholder="Enter Your Name" required type="text" /></label>
      <label><span>E-mail</span><input name="email" placeholder="Enter Your Email" required type="email" /></label>
      <label><span>Phone Number</span><input name="phone" placeholder="+91 999999999" required type="tel" /></label>
      <label><span>Company Name</span><input name="companyName" placeholder="Eg. Solar Ladder" type="text" /></label>
      <label><span>State</span>
        <select name="state" defaultValue="">
          <option value="">Select A State</option>
          {states.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </label>
      <label><span>Location</span><input name="location" placeholder="Eg. Mumbai" type="text" /></label>
      <label><span>Any Messages</span><textarea name="message" placeholder="Your Message (Optional)" rows={3} /></label>
      <div className="demo-form-actions">
        <button className="btn btn-primary" type="submit">Submit</button>
        <button className="btn btn-outline" type="button">Call us</button>
      </div>
    </form>
  );
}
