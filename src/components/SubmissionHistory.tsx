import React, { useState } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const SubmissionHistory = ({ data }) => {
  console.log('data', data);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  
  // Calculate pagination
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="space-y-4">
      <div className="rounded-[6px] border border-[#D6DADE] overflow-hidden text-[#4B5563] font-normal">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-[#F9FAFB] text-[12px] leading-[18px] text-left text-[#6B7280] font-medium">
            <tr>
              <th className="px-4 py-[10px] border-b border-[#D6DADE] w-[12%]">確認送信日時</th>
              <th className="px-4 py-[10px] border-b border-[#D6DADE] w-[20%]">送信者</th>
              <th className="px-4 py-[10px] border-b border-[#D6DADE] w-[33.33%]">会社名</th>
            </tr>
          </thead>
          <tbody className="bg-[#F8FAFC] text-[13px] leading-[20px] text-[#374151]">
            {currentData.length === 0 ? (
              <tr>
                <td colSpan={3} className="text-center py-4 text-sm text-gray-400">
                  データがありません
                </td>
              </tr>
            ) : (
              currentData.map((item, index) => (
                <tr key={index} className="hover:bg-[#F1F5F9] text-left transition-colors">
                  <td className="px-4 py-[12px] border-b border-[#D6DADE]">{item.dateTime}</td>
                  <td className="px-4 py-[12px] border-b border-[#D6DADE]">{item.username}</td>
                  <td className="px-4 py-[12px] border-b border-[#D6DADE]">{item.companyname}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      
      {data.length > itemsPerPage && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => handlePageChange(page)}
                  isActive={currentPage === page}
                  className="cursor-pointer"
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            
            <PaginationItem>
              <PaginationNext 
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default SubmissionHistory;