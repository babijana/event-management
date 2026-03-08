import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute"; // Ensure this import is added
import RoleSelect from "../pages/Roleselect.jsx";
import Register from "../pages/Register";
import Login from "../pages/Login";

import CustomerLayout from "../layouts/CustomerLayout";
import HallOwnerLayout from "../layouts/HallOwnerLayout";
import HandlerLayout from "../layouts/HandlerLayout";
import AdminLayout from "../layouts/AdminLayout";

// Customer Pages
import CustomerDashboard from "../pages/customer/Dashboard";
import CreateBooking from "../pages/customer/CreateBooking";
import MyBookings from "../pages/customer/MyBookings";
import BookingDetails from "../pages/customer/BookingDetails";
import Home from "../pages/customer/Home";
import Venues from "../pages/customer/Venues";
import Gallery from "../pages/customer/Gallery";

// Hall Owner Pages
import HallDashboard from "../pages/hallowner/Dashboard";
import ManageHall from "../pages/hallowner/ManageHall";
import CalendarView from "../pages/hallowner/CalendarView";
import DamageReports from "../pages/hallowner/DamageReports";
import UploadPhotos from "../pages/hallowner/UploadPhotos.jsx";

// Handler Pages
import HandlerDashboard from "../pages/handler/Dashboard";
import AssignedEvents from "../pages/handler/AssignedEvents";
import UpdateProgress from "../pages/handler/UpdateProgress";
import SubmitReport from "../pages/handler/SubmitReport";

// Admin Pages
import AdminDashboard from "../pages/admin/Dashboard";
import PendingRequests from "../pages/admin/PendingRequests";
import AssignHandler from "../pages/admin/AssignHandler";
import EventReports from "../pages/admin/EventReports";
import RevenueReports from "../pages/admin/RevenueReports";
import ManageEventTypes from "../pages/admin/ManageEventTypes";
import ManageUsers from "../pages/admin/ManageUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RoleSelect />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/customer",
    element: (
      <ProtectedRoute role="customer">
        <CustomerLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Home /> }, 
      { path: "dashboard", element: <CustomerDashboard /> },
      { path: "create-booking", element: <CreateBooking /> },
      { path: "my-bookings", element: <MyBookings /> },
      { path: "booking-details/:id", element: <BookingDetails /> },
      
      {path: "venues", element: <Venues />},
      {path: "gallery", element: <Gallery />},
      {path:'dashboard', element: <CustomerDashboard />}
    ],
  },

  {
    path: "/hallowner",
    element: (
      <ProtectedRoute role="hallowner">
        <HallOwnerLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <HallDashboard /> },
      { path: "manage-hall", element: <ManageHall /> },
      { path: "calendar", element: <CalendarView /> },
      { path: "damage-reports", element: <DamageReports /> },
      { path: "upload-photos", element: <UploadPhotos /> },
    ],
  },

  {
    path: "/handler",
    element: (
      <ProtectedRoute role="handler">
        <HandlerLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <HandlerDashboard /> },
      { path: "assigned-events", element: <AssignedEvents /> },
      { path: "update-progress", element: <UpdateProgress /> },
      { path: "submit-report", element: <SubmitReport /> },
    ],
  },

  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <AdminDashboard /> },
      { path: "pending-requests", element: <PendingRequests /> },
      { path: "assign-handler", element: <AssignHandler /> },
      { path: "event-reports", element: <EventReports /> },
      { path: "revenue-reports", element: <RevenueReports /> },
      { path: "manage-event-types", element: <ManageEventTypes /> },
      { path: "manage-users", element: <ManageUsers /> },
    ],
  },
]);