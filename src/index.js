/********************************************************************************
 * Copyright (C) 2026 CoCreate and Contributors.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 ********************************************************************************/

import postgresql from "@cocreate/postgresql";

/**
 * Universal router routing YugabyteDB request methods safely.
 *
 * Under the hood, YugabyteDB utilizes the PostgreSQL wire protocol and SQL dialect.
 * Rather than re-implementing identical query handling logic, this wrapper
 * delegates request execution directly to `@cocreate/postgresql`.
 *
 * All operations conform to CoCreate's unified, object-oriented JSON protocol
 * (e.g., `object.create`, `object.read`, `object.update`, `object.delete`).
 * This standardized protocol operates across all database drivers and third-party
 * APIs, allowing seamless, parallel multi-database state routing across backends
 * without exposing underlying engine-specific APIs to the application layer.
 */
export const send = (data) => {
    return postgresql.send(data);
};

export default { send };