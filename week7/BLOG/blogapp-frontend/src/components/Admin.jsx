import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../store/Authstore";
import { useNavigate } from "react-router";

function Admin() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const logout = useAuth((state) => state.logout);
  const navigate = useNavigate();

  const onLogout = async () => {
    await logout();
    navigate("/login");
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:4000/admin-api/users", { withCredentials: true });
      if (res.data.payload) {
        setUsers(res.data.payload);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const toggleStatus = async (email, currentStatus) => {
    try {
      const newStatus = !currentStatus;
      const res = await axios.patch(
        "http://localhost:4000/admin-api/user-status",
        { email, isUserActive: newStatus },
        { withCredentials: true }
      );
      if (res.status === 200) {
        toast.success(res.data.message || "User status updated");
        // Update local state directly to instantly reflect on UI
        setUsers(users.map(u => u.email === email ? { ...u, isUserActive: newStatus } : u));
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update status");
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-[#1d1d1f]">Admin Dashboard</h1>
        <button 
          onClick={onLogout}
          className="bg-red-50 text-red-600 hover:bg-red-100 font-medium px-5 py-2 rounded-full transition-colors text-sm"
        >
          Logout
        </button>
      </div>

      {loading ? (
        <p className="text-center text-[#0066cc] animate-pulse text-sm font-medium py-10">Loading network...</p>
      ) : (
        <div className="bg-white rounded-2xl border border-[#e8e8ed] shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#f5f5f7] text-[#6e6e73] text-sm font-medium border-b border-[#e8e8ed]">
                <th className="px-6 py-4">User Email Address</th>
                <th className="px-6 py-4">Current Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-b border-[#e8e8ed] last:border-none hover:bg-[#fbfbfd] transition-colors">
                  <td className="px-6 py-4 text-[#1d1d1f] font-medium">{user.email}</td>
                  
                  <td className="px-6 py-4">
                    <span 
                      className={`px-3 py-1 rounded-full text-[0.65rem] font-semibold tracking-widest uppercase ${
                        user.isUserActive 
                          ? "bg-[#34c759]/20 text-[#248a3d]" 
                          : "bg-[#ff3b30]/20 text-[#cc2f26]"
                      }`}
                    >
                      {user.isUserActive ? "Active" : "Blocked"}
                    </span>
                  </td>
                  
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => toggleStatus(user.email, user.isUserActive)}
                      className={`px-5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                        user.isUserActive 
                          ? "border-[#ff3b30]/30 text-[#cc2f26] hover:bg-[#ff3b30]/10"
                          : "border-[#34c759]/30 text-[#248a3d] hover:bg-[#34c759]/10"
                      }`}
                    >
                      {user.isUserActive ? "Block User" : "Activate User"}
                    </button>
                  </td>
                </tr>
              ))}
              
              {users.length === 0 && (
                <tr>
                  <td colSpan="3" className="px-6 py-12 text-center text-[#a1a1a6] text-sm">
                    No users or authors found in the system.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Admin;