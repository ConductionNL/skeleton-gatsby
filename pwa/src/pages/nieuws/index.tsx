import * as React from "react";
import { NieuwsGrid } from "../../components/nieuws/nieuwsGrid/NieuwsGrid";
import { useNews } from "../../hooks/news";

const NieuwsIndex: React.FC = () => {
  const _useNieuws = useNews();
  const getNieuws = _useNieuws.getAll();

  return <>{getNieuws.data && <NieuwsGrid nieuws={getNieuws.data ?? []} />}</>;
};

export default NieuwsIndex;
