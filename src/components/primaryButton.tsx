import React, { useState } from "react";

export function PrimaryButton() {
  const [user, setUser] = useState<{ name: string } | null>(null);

  async function handleClick() {
    const res = await fetch("https://example.com/api/user");
    const data = await res.json();
    setUser(data);
  }

  return (
    <div>
      <button onClick={handleClick}>유저 불러오기</button>
      {user && <p data-testid="username">{user.name}</p>}
    </div>
  );
}
