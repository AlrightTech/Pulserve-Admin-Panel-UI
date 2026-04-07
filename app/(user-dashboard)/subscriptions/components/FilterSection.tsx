export default function FilterSection({ onSearch, onPlanChange }: any) {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      <div className="relative flex-1">
        <input 
          type="text" 
          onChange={(e) => onSearch(e.target.value)} // Search function trigger
          placeholder="Search by company name or email" 
          className="w-full pl-10 pr-4 py-2 border rounded-lg"
        />
      </div>
      <select onChange={(e) => onPlanChange(e.target.value)} className="border p-2 rounded-lg">
        <option value="All Plans">All Plans</option>
        <option value="Premium">Premium</option>
        <option value="Standard">Standard</option>
        <option value="Basic">Basic</option>
      </select>
    </div>
  );
}