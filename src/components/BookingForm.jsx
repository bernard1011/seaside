import { useState } from 'react';
import { Calendar, Users, User } from 'lucide-react';

const BookingForm = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [showCheckInCalendar, setShowCheckInCalendar] = useState(false);
  const [showCheckOutCalendar, setShowCheckOutCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 9)); // October 2025

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Previous month days
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        day: prevMonthLastDay - i,
        isCurrentMonth: false,
        date: new Date(year, month - 1, prevMonthLastDay - i)
      });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        date: new Date(year, month, i)
      });
    }

    // Next month days
    const remainingDays = 42 - days.length; // 6 rows * 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        date: new Date(year, month + 1, i)
      });
    }

    return days;
  };

  const formatDate = (date) => {
    if (!date) return 'Select date';
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const handleDateClick = (date, isCheckIn) => {
    if (isCheckIn) {
      setCheckInDate(date);
      setShowCheckInCalendar(false);
    } else {
      setCheckOutDate(date);
      setShowCheckOutCalendar(false);
    }
  };

  const changeMonth = (direction) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + direction));
  };

  const CalendarPopup = ({ onSelectDate, selectedDate }) => {
    const days = getDaysInMonth(currentMonth);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return (
      <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-2xl p-4 z-50 w-80">
        {/* Month Navigation */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => changeMonth(-1)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="font-semibold text-gray-900">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </span>
          <button
            onClick={() => changeMonth(1)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Days of Week */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {daysOfWeek.map(day => (
            <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-1">
          {days.map((dayObj, idx) => {
            const isSelected = selectedDate && 
              dayObj.date.toDateString() === selectedDate.toDateString();
            const isPast = dayObj.date < today;
            const isToday = dayObj.date.toDateString() === today.toDateString();

            return (
              <button
                key={idx}
                onClick={() => !isPast && dayObj.isCurrentMonth && handleDateClick(dayObj.date, showCheckInCalendar)}
                disabled={isPast || !dayObj.isCurrentMonth}
                className={`
                  aspect-square flex items-center justify-center text-sm rounded-lg
                  transition-colors
                  ${!dayObj.isCurrentMonth ? 'text-gray-300' : ''}
                  ${isPast ? 'text-gray-300 cursor-not-allowed' : ''}
                  ${isSelected ? 'bg-blue-600 text-white font-bold' : ''}
                  ${!isSelected && dayObj.isCurrentMonth && !isPast ? 'hover:bg-gray-100 font-medium text-gray-900' : ''}
                  ${isToday && !isSelected ? 'border-2 border-blue-600' : ''}
                `}
              >
                {dayObj.day}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    // <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Book Your Stay</h1>

        {/* Check-in Date */}
        <div className="mb-6 relative">
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Check-in Date
          </label>
          <button
            onClick={() => {
              setShowCheckInCalendar(!showCheckInCalendar);
              setShowCheckOutCalendar(false);
            }}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-left flex items-center justify-between hover:border-gray-300 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-gray-500" />
              <span className={checkInDate ? 'text-gray-900' : 'text-gray-500'}>
                {formatDate(checkInDate)}
              </span>
            </div>
          </button>
          {showCheckInCalendar && (
            <CalendarPopup 
              onSelectDate={(date) => handleDateClick(date, true)} 
              selectedDate={checkInDate}
            />
          )}
        </div>

        {/* Check-out Date */}
        <div className="mb-6 relative">
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Check-out Date
          </label>
          <button
            onClick={() => {
              setShowCheckOutCalendar(!showCheckOutCalendar);
              setShowCheckInCalendar(false);
            }}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-left flex items-center justify-between hover:border-gray-300 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-gray-500" />
              <span className={checkOutDate ? 'text-gray-900' : 'text-gray-500'}>
                {formatDate(checkOutDate)}
              </span>
            </div>
          </button>
          {showCheckOutCalendar && (
            <CalendarPopup 
              onSelectDate={(date) => handleDateClick(date, false)} 
              selectedDate={checkOutDate}
            />
          )}
        </div>

        {/* Adults */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Adults
          </label>
          <div className="relative">
            <select
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 appearance-none cursor-pointer hover:border-gray-300 transition-colors text-gray-900"
            >
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>{num} Adult{num > 1 ? 's' : ''}</option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Children */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Children
          </label>
          <div className="relative">
            <select
              value={children}
              onChange={(e) => setChildren(Number(e.target.value))}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 appearance-none cursor-pointer hover:border-gray-300 transition-colors text-gray-900"
            >
              {[0, 1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Child' : 'Children'}</option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Check Availability Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
          <Users className="w-5 h-5" />
          Check Availability
        </button>
      </div>
    // </div>
  );
};

export default BookingForm;