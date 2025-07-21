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
  affiliation: string;
  username: string;
  email: string;
  condition: string;
}

const DataManagementTable = () => {
  const companyAData: UserData[] = [
    {
      affiliation: "部署XX",
      username: "△△次郎",
      email: "xxxx@konnichi.com",
      condition: "試験問題集"
    },
    {
      affiliation: "部署YY",
      username: "野村○○",
      email: "yyyy@konnichi.com",
      condition: "試験問題集"
    },
    {
      affiliation: "営業",
      username: "○○太郎",
      email: "aaaaa@konnichi.com",
      condition: "今日の治療指針"
    },
    {
      affiliation: "営業",
      username: "山田□子",
      email: "bbbbb@konnichi.com",
      condition: "今日の治療指針"
    }
  ];

  const companyBData: UserData[] = [
    {
      affiliation: "部署ZZZ",
      username: "田中○江",
      email: "zzzzz@konnichi.com",
      condition: "試験問題集"
    },
    {
      affiliation: "部署WWW",
      username: "佐藤△",
      email: "zzzzz@konnichi.com",
      condition: "試験問題集"
    },
    {
      affiliation: "営業",
      username: "○○太郎",
      email: "aaaaa@konnichi.com",
      condition: "今日の治療指針"
    },
    {
      affiliation: "営業",
      username: "□□花子",
      email: "ccccc@konnichi.com",
      condition: "今日の治療指針"
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
                <TableCell className="text-xs px-4 py-2 border-r border-gray-200">{user.affiliation}</TableCell>
                <TableCell className="text-xs px-4 py-2 border-r border-gray-200">{user.username}</TableCell>
                <TableCell className="text-xs px-4 py-2 border-r border-gray-200">
                  <a href={`mailto:${user.email}`} className="text-blue-600 underline hover:text-blue-800">
                    {user.email}
                  </a>
                </TableCell>
                <TableCell className="text-xs px-4 py-2 border-r border-gray-200">{user.condition}</TableCell>
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