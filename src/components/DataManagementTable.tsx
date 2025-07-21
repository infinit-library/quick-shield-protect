import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface UserData {
  id: number;
  name: string;
  org1: string;
  org2: string;
  company_name: string;
  last_name: string;
  first_name: string;
  last_kana: string;
  first_kana: string;
  access: string;
  email: string;
  created_at: string;
  updated_at: string;
}

const DataManagementTable = () => {
  const companyAData: UserData[] = [
    {
      id: 17,
      name: "kingfon",
      org1: "author1",
      org2: "營業",
      company_name: "",
      last_name: "king",
      first_name: "ton",
      last_kana: "ksdf",
      first_kana: "ldf",
      access: "今日の治療指針",
      email: "venus.seniordev@gmail.cc",
      created_at: "2025-07-18 14:",
      updated_at: "2025-07-18 14::"
    },
    {
      id: 18,
      name: "asdaasdf",
      org1: "asda",
      org2: "ゲスト",
      company_name: "ddddddddddddfsd",
      last_name: "asdaasd",
      first_name: "fasd",
      last_kana: "fasdf",
      first_kana: "asdfa",
      access: "今日の治療指針",
      email: "venus.seniordev@gmail.cc",
      created_at: "2025-07-18 14:",
      updated_at: "2025-07-18 14::"
    }
  ];

  const companyBData: UserData[] = [
    {
      id: 19,
      name: "ASD Albert",
      org1: "sdf",
      org2: "ゲスト",
      company_name: "vdvfsd",
      last_name: "ASD",
      first_name: "Albert",
      last_kana: "Jong",
      first_kana: "ASCAC",
      access: "(Null)",
      email: "AASD.seniordev@gmail.cc",
      created_at: "2025-07-18 14:",
      updated_at: "2025-07-18 14::"
    }
  ];

  const TableSection = ({ title, data, subtitle }: { title: string; data: UserData[]; subtitle: string }) => (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm">
          {title} <span className="text-red-500 ml-2">{subtitle}</span>
        </h2>
        <Button 
          size="sm" 
          className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs px-3 py-1 h-7"
        >
          + 新規追加
        </Button>
      </div>
      
      <div className="border border-gray-200">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 border-b border-gray-200">
              <TableHead className="text-xs text-gray-700 font-normal px-4 py-2 border-r border-gray-200">所属</TableHead>
              <TableHead className="text-xs text-gray-700 font-normal px-4 py-2 border-r border-gray-200">ユーザ名</TableHead>
              <TableHead className="text-xs text-gray-700 font-normal px-4 py-2 border-r border-gray-200">メールアドレス</TableHead>
              <TableHead className="text-xs text-gray-700 font-normal px-4 py-2 border-r border-gray-200">関係可能条件</TableHead>
              <TableHead className="text-xs text-gray-700 font-normal px-4 py-2">設定変更</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((user, index) => (
              <TableRow key={index} className="border-b border-gray-200 hover:bg-gray-50">
                <TableCell className="text-xs px-4 py-2 border-r border-gray-200">{user.org2}</TableCell>
                <TableCell className="text-xs px-4 py-2 border-r border-gray-200">{user.first_name}{user.last_name}</TableCell>
                <TableCell className="text-xs px-4 py-2 border-r border-gray-200">
                  <a href={`mailto:${user.email}`} className="text-blue-600 underline hover:text-blue-800">
                    {user.email}
                  </a>
                </TableCell>
                <TableCell className="text-xs px-4 py-2 border-r border-gray-200">{user.access}</TableCell>
                <TableCell className="text-xs px-4 py-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs px-2 py-1 h-6 border-gray-300 hover:bg-gray-50"
                  >
                    編集
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );

  return (
    <div className="p-6 bg-white min-h-screen">
      <TableSection 
        title="部分会社A" 
        subtitle="省スペースIDに関づく会社"
        data={companyAData} 
      />
      <TableSection 
        title="部分会社B" 
        subtitle="省スペースIDに関づく会社"
        data={companyBData} 
      />
    </div>
  );
};

export default DataManagementTable;